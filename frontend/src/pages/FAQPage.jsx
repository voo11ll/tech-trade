import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import styles from "../styles/styles";

const FAQPage = () => {
  return (
    <div>
      <Header activeHeading={6} />
      <Faq />
      <Footer />
    </div>
  );
};

const Faq = () => {
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
      <h2 className="text-3xl font-bold text-gray-900 mb-8">О нас</h2>
      <div className="mx-auto space-y-4">
        {/* single Faq */}

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(2)}
          >
            <span className="text-lg font-medium text-gray-900">
              Наша компания
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
              TechTrade - ваш надежный и опытный партнер в мире мобильных технологий, специализирующийся на продаже легендарных моделей iPhone и Samsung из серии "S". Мы гордимся своей репутацией одной из ведущих компаний в отрасли и стремимся предоставить нашим клиентам превосходное качество, широкий выбор и высокий уровень обслуживания.
В нашем ассортименте вы найдете широкий выбор мобильных устройств, аксессуаров и сопутствующих товаров от ведущих производителей. Нашей целью является предоставление клиентам максимально удобного и персонализированного сервиса, начиная от консультаций по выбору подходящего устройства и заканчивая послепродажным обслуживанием.
Мы уделяем особое внимание качеству предлагаемой нами продукции и предоставляемых услуг, чтобы вы могли быть уверены в надежности и долговечности ваших гаджетов. Наши сотрудники - это настоящие эксперты в своей области, готовые оказать квалифицированную помощь в любое время.
Присоединяйтесь к сообществу TechTrade и откройте для себя мир передовых мобильных технологий. Мы всегда рады новым клиентам и готовы сделать ваш опыт взаимодействия с нами максимально приятным и запоминающимся.
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
              Что отличает TechTrade
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
              Лучший выбор: У нас вы найдете широкий ассортимент моделей iPhone и Samsung S-серии. Независимо от того, ищете ли вы флагманские модели с передовыми функциями или предпочитаете более доступные варианты, у нас есть идеальный смартфон для каждого.
Мы постоянно обновляем нашу коллекцию, чтобы предложить вам самые актуальные модели и цветовые варианты. Наша цель - предоставить нашим клиентам возможность выбора из широкого спектра устройств, соответствующих их потребностям и бюджету.
Будь то последние инновационные модели или более бюджетные, но надежные варианты - мы гарантируем, что вы найдете здесь то, что вам нужно. Наша команда экспертов всегда готова помочь вам сделать правильный выбор и получить максимальную отдачу от вашего нового смартфона.
Приходите в TechTrade и откройте для себя мир передовых мобильных технологий от ведущих брендов. Мы с радостью поможем вам подобрать идеальное устройство, которое станет вашим незаменимым спутником.
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
              Гарантированное качество
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
              Мы строго следим за качеством наших продуктов. Все наши iPhone и Samsung S-серии проходят тщательную проверку, чтобы гарантировать, что они соответствуют высоким стандартам производителей. Мы работаем только с официальными поставщиками, чтобы убедиться, что каждый смартфон, который вы покупаете у нас, является аутентичным и надежным.
Наши эксперты тщательно осматривают каждое устройство, проверяя его функциональность, внешний вид и комплектацию. Мы также гарантируем, что все смартфоны поддерживают полный набор оригинальных аксессуаров и программного обеспечения от производителей.
Мы понимаем, насколько важно для наших клиентов получить именно тот продукт, который они ожидают. Именно поэтому мы прилагаем все усилия, чтобы обеспечить самое высокое качество и подлинность каждого смартфона, представленного в нашем магазине.
Выбирая продукты TechTrade, вы можете быть уверены, что получаете только оригинальные, проверенные и надежные устройства. Наша приверженность качеству - это наша гарантия вашего удовлетворения.
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
              Превосходное обслуживание
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
              Наша команда экспертов всегда готова помочь вам с выбором и ответить на ваши вопросы. Мы ценим каждого клиента и стремимся предоставить персонализированный и дружелюбный сервис.
Ваше удовлетворение - наш главный приоритет, и мы готовы сделать все возможное, чтобы вы остались довольны своей покупкой. Наши консультанты обладают глубокими знаниями о всех представленных моделях и помогут вам подобрать идеальное устройство, исходя из ваших потребностей и предпочтений.
Мы понимаем, что выбор нового смартфона может быть непростой задачей. Поэтому мы уделяем особое внимание каждому клиенту, чтобы понять ваши требования и предложить оптимальное решение. Наша цель - не просто продать вам товар, а помочь вам сделать выгодную и правильную покупку.
Если у вас возникнут любые вопросы на этапе выбора или после приобретения устройства, наша команда всегда будет рада помочь. Мы гарантируем, что вы получите исчерпывающие ответы и поддержку, которые сделают ваше взаимодействие с нами приятным и продуктивным.
Доверьтесь профессионалам TechTrade и позвольте нам сделать ваш опыт покупки незабываемым!
              </p>
            </div>
          )}
        </div>

        <div className="border-b border-gray-200 pb-4">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => toggleTab(6)}
          >
            <span className="text-lg font-medium text-gray-900">
              Надежная доставка и гарантия
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
              Мы понимаем, что быстрая и безопасная доставка является важной частью покупки онлайн. Мы предлагаем надежные варианты доставки, чтобы ваш заказ был доставлен вовремя и в безупречном состоянии.
Кроме того, наша компания предоставляет гарантию на все продукты, чтобы вы могли быть уверены в их надежности и качестве. Мы понимаем, насколько важно для вас спокойствие и уверенность в своей покупке.
В случае возникновения любых проблем с товаром вы можете рассчитывать на нашу всестороннюю поддержку. Наши эксперты быстро и эффективно решат любые вопросы, связанные с гарантийным обслуживанием, возвратом или обменом.
Мы стремимся предоставить нашим клиентам не только высококачественные продукты, но и безупречный сервис на всех этапах покупки. Ваше удовлетворение является нашим главным приоритетом.
              </p>
            </div>
          )}
        </div>

        {/* <div className="border-b border-gray-200 pb-4">
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

export default FAQPage;
