---
description: How to successfully wrap up a task and end a conversation.
---

# End of Conversation/Task Completion Workflow

When a task is complete and the user is ready to end the conversation, ensure the following steps are executed to safely persist changes, verify integrity, and hand off the work properly.

## Steps

// turbo
1. **Verify No Outstanding Uncommitted Changes:** Check the current git status to see if any work was left unstaged.
   ```bash
   git status
   ```

2. **Commit Dangling Work (If Applicable):** If `git status` shows uncommitted files relevant to the conversation, ask the user if they want to commit them or stash them. If they want to commit:
   ```bash
   git add .
   git commit -m "chore: final updates before task completion"
   ```

3. **Verify Dev Server/Build Integrity (Optional but Recommended):** Ensure that the final changes did not break the build.
   ```bash
   npm run build
   ```

// turbo-all
4. **Push Changes to Remote:**
   ```bash
   git push
   ```

5. **Kill Stale Background Processes:** If you started any persistent background tasks (like an `npm run dev` server) specifically for this conversation, terminate them so they don't consume resources or block ports for future sessions.
   ```bash
   pkill -f "npm run dev"
   # or gracefully kill specific process IDs if known
   ```

6. **Provide Final Summary:**
   - Briefly summarize the goals achieved during the conversation.
   - List the files that were primarily modified.
   - Provide a link to the Pull Request (if one was created).
   - Sign off and ask if there is absolutely anything else before closing.
