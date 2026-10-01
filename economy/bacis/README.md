# 경제노트 · GitHub Pages

HTML, CSS, JavaScript만으로 동작하는 정적 웹페이지입니다. 서버, 패키지 설치, 빌드 과정이 필요 없습니다.

## 올리는 방법

1. 이 압축파일을 풀고 index.html, styles.css, app.js, data.js, .nojekyll을 GitHub 저장소 최상위에 올립니다.
2. 저장소 Settings → Pages → Build and deployment에서 Deploy from a branch를 선택합니다.
3. 업로드한 브랜치와 / (root)를 선택한 뒤 Save를 누릅니다.

모든 파일 경로는 상대 경로이므로 저장소 이름이 붙는 GitHub Pages 주소에서도 동작합니다.

## 용어 수정

data.js의 window.ECON_DATA에서 chapters와 terms를 수정합니다. 기존 용어의 id는 유지하면 저장된 진도를 이어서 사용할 수 있습니다. relatedIds에는 관련 용어의 id를 넣습니다. enabled가 false인 항목은 학습 진도와 퀴즈에서 제외됩니다.

원본에서 잘린 ‘수’는 ‘주가지수’로 확인됐습니다. 기존 주가지수와 통합해 중복을 제외한 96개 용어를 학습합니다. 기존 주가지수 ID를 유지하므로 저장된 진도는 보존됩니다.

진도와 오답은 방문자의 브라우저에 저장됩니다. 기기 간 동기화는 없으며 다른 사이트 주소로 이동하면 진도는 별도로 시작합니다.
