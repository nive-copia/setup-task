# setup-task

[![ci](https://github.com/lukeshay/setup-task/actions/workflows/workflow.yml/badge.svg)](https://github.com/lukeshay/setup-task/actions/workflows/workflow.yml)

Installs [go-task/task](https://github.com/go-task/task) in your Github Actions workflow. This currently only works with on a linux machine.

Example usage:

```yaml
- name: Setup go-task/task
  uses: 'lukeshay/setup-task@v1'
  with:
    version: '3.11.0' # Optional
```
