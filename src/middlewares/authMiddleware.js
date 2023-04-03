import {localStorageToObject} from "@/services/services"

const authGuard = (to, from, next) => {
  const user = localStorageToObject('userData');
  if (user && user.isAuth) {
    next();
  } else {
    next("/");
  }
};

export { authGuard };
