const cards = [
  { img: "img/cards/card_1.png", answer: true },
  { img: "img/cards/card_2.png", answer: false },
  { img: "img/cards/card_3.png", answer: true },
  { img: "img/cards/card_4.png", answer: false },
  { img: "img/cards/card_5.png", answer: true },
  { img: "img/cards/card_6.png", answer: false },
  { img: "img/cards/card_7.png", answer: true },
  { img: "img/cards/card_8.png", answer: false },
  { img: "img/cards/card_9.png", answer: true },
  { img: "img/cards/card_10.png", answer: false },
  { img: "img/cards/card_11.png", answer: true },
  { img: "img/cards/card_12.png", answer: false },
  { img: "img/cards/card_13.png", answer: true },
  { img: "img/cards/card_14.png", answer: false },
  { img: "img/cards/card_15.png", answer: true },
  { img: "img/cards/card_16.png", answer: false },
  { img: "img/cards/card_17.png", answer: true },
  { img: "img/cards/card_18.png", answer: false },
  { img: "img/cards/card_19.png", answer: true },
  { img: "img/cards/card_20.png", answer: false },
  { img: "img/cards/card_21.png", answer: true },
  { img: "img/cards/card_22.png", answer: false },
  { img: "img/cards/card_23.png", answer: true },
  { img: "img/cards/card_24.png", answer: false },
  { img: "img/cards/card_25.png", answer: true },
  { img: "img/cards/card_26.png", answer: false },
  { img: "img/cards/card_27.png", answer: true },
  { img: "img/cards/card_28.png", answer: false },
  { img: "img/cards/card_29.png", answer: true },
  { img: "img/cards/card_30.png", answer: false },
  { img: "img/cards/card_31.png", answer: true },
  { img: "img/cards/card_32.png", answer: false },
  { img: "img/cards/card_33.png", answer: true },
  { img: "img/cards/card_34.png", answer: false },
  { img: "img/cards/card_35.png", answer: true },
  { img: "img/cards/card_36.png", answer: false },
  { img: "img/cards/card_37.png", answer: true },
  { img: "img/cards/card_38.png", answer: false },
  { img: "img/cards/card_39.png", answer: true },
  { img: "img/cards/card_40.png", answer: false },
  { img: "img/cards/card_41.png", answer: true },
  { img: "img/cards/card_42.png", answer: false },
  { img: "img/cards/card_43.png", answer: true },
  { img: "img/cards/card_44.png", answer: false },
  { img: "img/cards/card_45.png", answer: true },
  { img: "img/cards/card_46.png", answer: false },
  { img: "img/cards/card_47.png", answer: true },
  { img: "img/cards/card_48.png", answer: false },
  { img: "img/cards/card_49.png", answer: true },
  { img: "img/cards/card_50.png", answer: false },
  { img: "img/cards/card_51.png", answer: true },
  { img: "img/cards/card_52.png", answer: false },
  { img: "img/cards/card_53.png", answer: true },
  { img: "img/cards/card_54.png", answer: false },
  { img: "img/cards/card_55.png", answer: true },
  { img: "img/cards/card_56.png", answer: false },
  { img: "img/cards/card_57.png", answer: true },
  { img: "img/cards/card_58.png", answer: false },
  { img: "img/cards/card_59.png", answer: true },
  { img: "img/cards/card_60.png", answer: false },
  { img: "img/cards/card_61.png", answer: true },
  { img: "img/cards/card_62.png", answer: false },
  { img: "img/cards/card_63.png", answer: true },
  { img: "img/cards/card_64.png", answer: false },
  { img: "img/cards/card_65.png", answer: true },
  { img: "img/cards/card_66.png", answer: false },
  { img: "img/cards/card_67.png", answer: true },
  { img: "img/cards/card_68.png", answer: false },
  { img: "img/cards/card_69.png", answer: true },
  { img: "img/cards/card_70.png", answer: false },
];

const ticket = {
  10: {
    promocode: "HELLORG-OS41B5",
    promotext:
      'Купон 100Р при покупке на сумму от 1000 рублей <a href="https://rivegauche.ru/?utm_source=special&utm_medium=hello&utm_campaign=1122" target="_blank">в Интернет-магазине РИВ ГОШ</a> при выборе доставки в постаматы и курьером. <br> С 12 по 30 ноября, не действует на специальные цены, CHANEL, DIOR, DIOR BACKSTAGE, GUERLAIN и РИВ ГОШ Box.',
  },
  30: {
    promocode: "HELLORG-GMV8NO",
    promotext:
      'Купон 350Р при покупке на сумму от 3500 рублей <a href="https://rivegauche.ru/?utm_source=special&utm_medium=hello&utm_campaign=1122" target="_blank">в Интернет-магазине РИВ ГОШ</a> при выборе доставки в постаматы и курьером. <br> С 12 по 30 ноября, не действует на специальные цены, CHANEL, DIOR, DIOR BACKSTAGE, GUERLAIN и РИВ ГОШ Box.',
  },
  50: {
    promocode: "HELLORG-RDRO5Q",
    promotext:
      'Купон 500Р при покупке на сумму от 5000 рублей <a href="https://rivegauche.ru/?utm_source=special&utm_medium=hello&utm_campaign=1122" target="_blank">в Интернет-магазине РИВ ГОШ</a> при выборе доставки в постаматы и курьером. <br> С 12 по 30 ноября, не действует на специальные цены, CHANEL, DIOR, DIOR BACKSTAGE, GUERLAIN и РИВ ГОШ Box.',
  },
  70: {
    promocode: "HELLORG-2E880B",
    promotext:
      'Купон 1000Р при покупке на сумму от 8000 рублей в<a href="https://rivegauche.ru/?utm_source=special&utm_medium=hello&utm_campaign=1122" target="_blank">в Интернет-магазине РИВ ГОШ</a> при выборе доставки в постаматы и курьером. <br>  С 12 по 30 ноября, не действует на специальные цены, CHANEL, DIOR, DIOR BACKSTAGE, GUERLAIN и РИВ ГОШ Box.',
  },
};

// Для запуска тестов (npm test) - разблокировать ниже строчку!
// module.exports = { cards, ticket };