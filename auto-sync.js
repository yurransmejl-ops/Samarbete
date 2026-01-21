#!/usr/bin/env node

/**
 * Auto-sync script för Cursor/VS Code
 * Detta script kan köras som en extension eller watch task
 * Pushar automatiskt ändringar varje 30:e sekund
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const REPO_DIR = __dirname;
const PUSH_INTERVAL = 30000; // 30 sekunder
let lastPushTime = 0;

function checkAndPush() {
  try {
    // Kolla om det finns ändringar
    const status = execSync('git status --porcelain', { cwd: REPO_DIR, encoding: 'utf-8' }).trim();
    
    if (status) {
      const now = Date.now();
      const timeSinceLastPush = now - lastPushTime;
      
      if (timeSinceLastPush >= PUSH_INTERVAL) {
        console.log('[Auto-sync] Ändringar detekterade, pushar...');
        execSync('./sync.sh push', { cwd: REPO_DIR, stdio: 'inherit' });
        lastPushTime = now;
      }
    }
  } catch (error) {
    // Ignorera fel tyst
  }
}

// Kolla var 5:e sekund
setInterval(checkAndPush, 5000);

// Push vid start om det finns ändringar
checkAndPush();

console.log('✅ Auto-sync aktiverat! Pushar automatiskt varje 30:e sekund om det finns ändringar.');
