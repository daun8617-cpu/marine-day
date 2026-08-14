#!/bin/bash
# ============================================
# 하네스 설치 스크립트
# 사용법: bash install.sh /내/프로젝트/경로
# ============================================
set -e
PROJECT_DIR="${1:-.}"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "🎨 Figma → Code 하네스 설치"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "설치 경로: $(cd "$PROJECT_DIR" 2>/dev/null && pwd || echo "$PROJECT_DIR")"
echo ""

mkdir -p "$PROJECT_DIR"
cd "$PROJECT_DIR"

cp "$SCRIPT_DIR/CLAUDE.md" .
echo "✅ CLAUDE.md"

cp "$SCRIPT_DIR/figma-code-connect.json" .
echo "✅ figma-code-connect.json"

cp "$SCRIPT_DIR/style-dictionary.config.mjs" .
echo "✅ style-dictionary.config.mjs"

# claude-config → .claude 변환
mkdir -p .claude
cp -r "$SCRIPT_DIR/claude-config/"* .claude/
echo "✅ .claude/ (settings.json, hooks, commands, skills, agents)"

# Style Dictionary 토큰 원본
cp -r "$SCRIPT_DIR/tokens" . 2>/dev/null || true
echo "✅ tokens/"

# scripts
cp -r "$SCRIPT_DIR/scripts" .
echo "✅ scripts/"

# docs
cp -r "$SCRIPT_DIR/docs" .
echo "✅ docs/"

# src/tokens 폴더 미리 생성
mkdir -p src/tokens
echo "✅ src/tokens/ (npm run build:tokens 실행 시 CSS 파일이 생성됩니다)"

# .gitignore
if [ ! -f .gitignore ]; then
  echo ".claude/settings.local.json" > .gitignore
  echo "node_modules/" >> .gitignore
  echo "dist/" >> .gitignore
  echo "storybook-static/" >> .gitignore
  echo ".env" >> .gitignore
  echo "✅ .gitignore 생성"
fi

# 하네스 폴더 자동 삭제
echo ""
echo "🧹 하네스 폴더 정리 중..."
rm -rf "$SCRIPT_DIR"
echo "✅ harness/ 폴더 삭제 완료"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ 설치 완료!"
echo ""
echo "다음 단계:"
echo "  1. CLAUDE.md 열어서 [프로젝트명] 수정"
echo "  2. claude 실행"
echo "  3. Figma MCP 연결 (/mcp)"
echo "  4. npm run build:tokens 실행"
echo ""
