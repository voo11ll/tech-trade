import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const TradePage = () => {
  return (
    <div>
      <Header activeHeading={5} />
      <Trade />
      <Footer />
    </div>
  );
};

const Trade = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Trade-in</h2>
      <div className="mx-auto space-y-4">
        {/* single Trade */}

        
        <div className="border-b border-gray-200 pb-4">
  <button
    className="flex items-center justify-between w-full"
    onClick={() => toggleTab(7)}
  >
    <span className="text-lg font-medium text-gray-900">
      Онлайн заявка на трейд-ин в интернет-магазине TechTrade ?
    </span>
    {activeTab === 7 ? (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
  {activeTab === 7 && (
    <div className="mt-4">
      <p className="text-base text-gray-500">
        Заполните форму, чтобы оформить заявку на обмен вашего старого устройства Apple на новое:
      </p>
      <p className="text-base text-gray-500">
        Ваше имя:<br />
        Номер телефона:<br />
        Email:<br />
        Модель устройства:<br />
        Год выпуска:<br />
        Состояние устройства (отличное, хорошее, удовлетворительное):<br />
        Комментарии:<br />
        Прикрепленные фото
      </p>
      <p className="text-base text-gray-500">
        После получения заявки, с вами свяжется наш менеджер, чтобы согласовать условия и оформить трейд-ин. Мы гарантируем выгодную оценку вашего устройства и быструю обработку заявки.
      </p>
      <p className="text-base text-gray-500">
        Спасибо, что выбираете TechTrade для обновления своих устройств Apple!
        Связывайтесь по телеграмм <a href="https://t.me/TechTradePR" className="text-blue-500">@TechTradePR</a>
      </p>
    </div>
  )}
</div>


        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
              Что такое Trade-in?
            </span>
            {activeTab === 2 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 2 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
              Программа Trade-in позволяет обменять старое устройство на скидку при покупке нового. 
              Когда вы сдаёте своё устройство по программе Trade-in, его стоимость определяется на основе 
              актуальности модели, а также её технического и внешнего состояния. 
              Оцененная сумма предоставляется вам в качестве скидки на приобретение нового устройства.
              Проще говоря, вы приносите свой старый телефон при самовывозе, сдаёте его и сразу же получаете скидку на покупку нового гаджета!
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
  <button
    className="flex items-center justify-between w-full"
    onClick={() => toggleTab(3)}
  >
    <span className="text-lg font-medium text-gray-900">
      Какими преимуществами обладает Trade-in?
    </span>
    {activeTab === 3 ? (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
  {activeTab === 3 && (
    <div className="mt-4">
      <p className="text-base text-gray-500">
        – Вам не придётся тратить время на размещение объявлений и продажу телефона. Мы просто заберём его у вас :)<br />
        – Наша компания берёт на себя все риски, связанные с продажей вашего старого устройства, так что вам не о чем беспокоиться.<br />
        – Вы получаете дополнительную скидку на покупку нового устройства.
      </p>
    </div>
  )}
</div>


        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(4)}
          >
            <span className="text-lg font-medium text-gray-900">
            Как мне связаться со службой поддержки ?
            </span>
            {activeTab === 4 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 4 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
              Вы можете связаться с нашей службой поддержки, отправив нам электронное сообщение по адресу
              techtradeoffers@gmail.com или позвонив по телефону +7 (978) 336-29-79
                с 8 утра до 20 вечера по мск времени, с понедельника по пятницу.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(5)}
          >
            <span className="text-lg font-medium text-gray-900">
              Могу ли я изменить или отменить свой заказ?
            </span>
            {activeTab === 5 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 5 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
              К сожалению, после размещения заказа мы не можем
              вносить изменения или отменять его. Если вам больше не нужны эти предметы
              вы сделали заказ, вы можете вернуть его для возврата денег в течение 14 дней
              о доставке.
              </p>
            </div>
          )}
        </div>

        {/* <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Do you offer international shipping?
            </span>
            {activeTab === 6 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 6 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                Currently, we only offer shipping within the United States.
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(7)}
          >
            <span className="text-lg font-medium text-gray-900">
              What payment methods do you accept?
            </span>
            {activeTab === 7 ? (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            )}
          </button>
          {activeTab === 7 && (
            <div className="mt-4">
              <p className="text-base text-gray-500">
                We accept visa,mastercard,paypal payment method also we have
                cash on delivery system.
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TradePage;
