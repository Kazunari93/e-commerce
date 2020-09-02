import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.saga";
import { userSagas } from "./user/user.sagas";
import { cartSagas } from "./cart/cart.sagas";

export default function* rootSaga() {
  // 注意 配列に入ってなかった
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
