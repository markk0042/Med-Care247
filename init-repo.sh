#!/bin/bash
# Script to initialize git repository for GitHub Desktop

cd /Users/markkelly/Documents/medcare247

# Create .git directory structure manually
mkdir -p .git/objects
mkdir -p .git/refs/heads
mkdir -p .git/refs/tags

# Create basic git config files
echo "ref: refs/heads/main" > .git/HEAD
echo "[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallrefupdates = true
[remote \"origin\"]
	url = https://github.com/markk0042/Medcare247.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch \"main\"]
	remote = origin
	merge = refs/heads/main" > .git/config

echo "Git repository structure created!"
echo "Now open GitHub Desktop and it should detect this repository."

