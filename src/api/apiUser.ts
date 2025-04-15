// const USER_TELEGRAM_URL = "https://dev.kr-order.ru/api/telegram-user/";
const USER_TELEGRAM_URL = "https://kr-order.ru/api/telegram-user/";

type UserData = {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  username: string | undefined;
};

export const postUser = async (userData: UserData) => {
  const res = await fetch(USER_TELEGRAM_URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.status === 500) {
    throw new Error("Сервер устал, попробуйте еще раз");
  }

  if (!res.ok) {
    throw new Error("Что-то пошло не так");
  }

  const response = await res.json();
  return response;
};
