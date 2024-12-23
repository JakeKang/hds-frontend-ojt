export const validatePost = ({ title, content }) => {
  const errors = {};

  if (!title.trim()) {
    errors.title = '제목을 입력해주세요.';
  } else if (title.length < 3) {
    errors.title = '제목은 최소 3자 이상이어야 합니다.';
  }

  if (!content.trim()) {
    errors.content = '내용을 입력해주세요.';
  } else if (content.length < 10) {
    errors.content = '내용은 최소 10자 이상이어야 합니다.';
  }

  return errors;
};
