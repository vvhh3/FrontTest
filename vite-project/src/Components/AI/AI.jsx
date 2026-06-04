import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Manrope:wght@400;500;600;700&display=swap');

  .wp * { box-sizing: border-box; margin: 0; padding: 0; }
  .wp {
    font-family: 'Manrope', sans-serif;
    background: #0a0a0f;
    color: #f0f0ff;
    font-size: 14px;
    line-height: 1.6;
  }

  /* NAV */
  .wp-nav {
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 40px; height: 60px;
    background: #0f0f1a; border-bottom: 1px solid rgba(255,255,255,0.07);
  }
  .wp-logo { font-family: 'Unbounded', sans-serif; font-size: 16px; font-weight: 900; }
  .wp-logo span { color: #3b82f6; }
  .wp-nav-links { display: flex; gap: 28px; list-style: none; }
  .wp-nav-links a { font-size: 12px; color: #9ca3af; text-decoration: none; }
  .wp-nav-right { text-align: right; }
  .wp-nav-phone { font-family: 'Unbounded', sans-serif; font-size: 13px; font-weight: 700; display: block; }
  .wp-nav-hours { font-size: 11px; color: #6b7280; }

  /* HERO */
  .wp-hero { padding: 64px 40px; background: #0a0a0f; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .wp-badge {
    display: inline-block; background: #1c1c2e;
    border: 1px solid rgba(255,255,255,0.07); border-radius: 20px;
    padding: 5px 14px; font-size: 11px; color: #9ca3af; margin-bottom: 24px;
  }
  .wp-h1 {
    font-family: 'Unbounded', sans-serif; font-size: 36px;
    font-weight: 900; line-height: 1.15; letter-spacing: -1px; margin-bottom: 18px;
  }
  .wp-h1 .price { color: #3b82f6; }
  .wp-hero-desc { color: #9ca3af; font-size: 14px; max-width: 480px; margin-bottom: 32px; }
  .wp-hero-cta { display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; }
  .wp-btn-primary {
    display: inline-flex; align-items: center; gap: 8px;
    background: linear-gradient(135deg, #4f46e5, #6366f1);
    color: #fff; border: none; border-radius: 10px;
    padding: 12px 22px; font-size: 13px; font-weight: 700;
    font-family: 'Manrope', sans-serif; cursor: pointer;
  }
  .wp-btn-secondary {
    display: inline-flex; align-items: center; gap: 8px;
    background: #1c1c2e; color: #f0f0ff;
    border: 1px solid rgba(255,255,255,0.07); border-radius: 10px;
    padding: 12px 22px; font-size: 13px; font-weight: 600;
    font-family: 'Manrope', sans-serif; cursor: pointer;
  }
  .wp-proof { display: flex; align-items: center; gap: 12px; }
  .wp-avatars { display: flex; }
  .wp-avatar {
    width: 28px; height: 28px; border-radius: 50%;
    border: 2px solid #0a0a0f; background: #1c1c2e;
    font-size: 12px; display: flex; align-items: center; justify-content: center;
    margin-left: -7px;
  }
  .wp-avatar:first-child { margin-left: 0; }
  .wp-proof-text { font-size: 12px; color: #9ca3af; }
  .wp-proof-text strong { color: #f0f0ff; }

  /* STATS */
  .wp-stats { background: #0f0f1a; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .wp-stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .wp-stat {
    background: #161624; padding: 28px;
    display: flex; align-items: center; gap: 14px;
    border-right: 1px solid rgba(255,255,255,0.07);
  }
  .wp-stat:last-child { border-right: none; }
  .wp-stat-icon {
    width: 42px; height: 42px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; flex-shrink: 0;
  }
  .wp-stat-num { font-family: 'Unbounded', sans-serif; font-size: 20px; font-weight: 900; line-height: 1; }
  .wp-stat-label { font-size: 11px; color: #9ca3af; margin-top: 3px; }

  /* SECTION */
  .wp-section { padding: 72px 40px; }
  .wp-section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: #3b82f6;
    margin-bottom: 8px; text-align: center;
  }
  .wp-section-title {
    font-family: 'Unbounded', sans-serif; font-size: 26px;
    font-weight: 800; text-align: center; letter-spacing: -0.5px; margin-bottom: 8px;
  }
  .wp-section-sub { text-align: center; color: #9ca3af; font-size: 14px; margin-bottom: 48px; }
  .wp-container { max-width: 1100px; margin: 0 auto; }

  /* SERVICES */
  .wp-services { background: #0a0a0f; }
  .wp-services-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; }
  .wp-service-card {
    background: #161624; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px; padding: 24px 20px;
  }
  .wp-service-icon {
    width: 44px; height: 44px; border-radius: 11px;
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; margin-bottom: 16px;
  }
  .wp-service-name { font-family: 'Unbounded', sans-serif; font-size: 13px; font-weight: 700; margin-bottom: 7px; }
  .wp-service-desc { font-size: 12px; color: #9ca3af; line-height: 1.55; margin-bottom: 14px; }
  .wp-service-features { list-style: none; margin-bottom: 18px; }
  .wp-service-features li {
    font-size: 11.5px; color: #9ca3af; padding: 2px 0;
    display: flex; align-items: center; gap: 6px;
  }
  .wp-service-features li::before { content: '✓'; color: #10b981; font-weight: 700; font-size: 11px; }
  .wp-service-price { font-family: 'Unbounded', sans-serif; font-size: 14px; font-weight: 700; color: #10b981; }

  /* WHY */
  .wp-why { background: #0f0f1a; }
  .wp-why-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; }
  .wp-why-card {
    background: #161624; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 12px; padding: 22px 18px; text-align: center;
  }
  .wp-why-icon {
    width: 48px; height: 48px; border-radius: 50%;
    background: #1c1c2e; border: 1px solid rgba(255,255,255,0.07);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; margin: 0 auto 12px;
  }
  .wp-why-title { font-family: 'Unbounded', sans-serif; font-size: 11px; font-weight: 700; margin-bottom: 7px; }
  .wp-why-desc { font-size: 11px; color: #9ca3af; line-height: 1.5; }

  /* CASES */
  .wp-cases { background: #0a0a0f; }
  .wp-cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .wp-case-card {
    background: #161624; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 14px; overflow: hidden;
  }
  .wp-case-img {
    height: 160px; display: flex; align-items: center; justify-content: center;
    font-size: 52px; position: relative;
  }
  .wp-case-tag {
    position: absolute; top: 12px; left: 12px;
    background: rgba(0,0,0,0.6); border: 1px solid rgba(255,255,255,0.07);
    border-radius: 5px; padding: 3px 9px; font-size: 10px; color: #9ca3af;
  }
  .wp-case-body { padding: 18px; }
  .wp-case-title { font-family: 'Unbounded', sans-serif; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
  .wp-case-stats { display: flex; gap: 18px; margin-bottom: 14px; }
  .wp-case-stat-label { font-size: 10px; color: #6b7280; }
  .wp-case-stat-value { font-family: 'Unbounded', sans-serif; font-size: 18px; font-weight: 800; color: #10b981; }
  .wp-case-btn {
    display: block; text-align: center; background: #1c1c2e;
    border: 1px solid rgba(255,255,255,0.07); border-radius: 7px;
    padding: 9px; font-size: 12px; font-weight: 600; color: #9ca3af; cursor: pointer;
  }

  /* CTA */
  .wp-cta-wrap { padding: 0 40px 72px; background: #0a0a0f; }
  .wp-cta {
    background: linear-gradient(135deg, #3b29cc, #6366f1, #7c3aed);
    border-radius: 18px; padding: 52px 40px; text-align: center;
  }
  .wp-cta-title { font-family: 'Unbounded', sans-serif; font-size: 28px; font-weight: 800; margin-bottom: 10px; }
  .wp-cta-sub { font-size: 14px; opacity: .85; margin-bottom: 26px; }
  .wp-cta .wp-btn-primary { background: #fff; color: #4f46e5; }

  /* FOOTER */
  .wp-footer { background: #0f0f1a; border-top: 1px solid rgba(255,255,255,0.07); padding: 44px 40px 20px; }
  .wp-footer-grid {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px;
    padding-bottom: 36px; border-bottom: 1px solid rgba(255,255,255,0.07); margin-bottom: 20px;
  }
  .wp-footer-logo { font-family: 'Unbounded', sans-serif; font-size: 16px; font-weight: 900; margin-bottom: 8px; }
  .wp-footer-logo span { color: #3b82f6; }
  .wp-footer-desc { font-size: 12px; color: #6b7280; line-height: 1.6; margin-bottom: 14px; }
  .wp-cookie {
    background: #161624; border: 1px solid rgba(255,255,255,0.07);
    border-radius: 9px; padding: 12px 14px; font-size: 11px; color: #6b7280;
    display: flex; justify-content: space-between; align-items: center; gap: 10px;
  }
  .wp-cookie-btn {
    background: #4f46e5; color: #fff; border: none; border-radius: 5px;
    padding: 5px 11px; font-size: 11px; font-weight: 700;
    cursor: pointer; font-family: 'Manrope', sans-serif; flex-shrink: 0;
  }
  .wp-footer-col h4 { font-family: 'Unbounded', sans-serif; font-size: 11px; font-weight: 700; margin-bottom: 14px; }
  .wp-footer-col ul { list-style: none; }
  .wp-footer-col li { margin-bottom: 9px; }
  .wp-footer-col a { font-size: 12px; color: #9ca3af; text-decoration: none; }
  .wp-contact-item { display: flex; align-items: center; gap: 7px; font-size: 12px; color: #9ca3af; margin-bottom: 9px; }
  .wp-footer-bottom {
    max-width: 1100px; margin: 0 auto;
    display: flex; justify-content: space-between; font-size: 11px; color: #6b7280;
  }
  .wp-footer-bottom a { color: #6b7280; text-decoration: none; }
`;

const NAV_LINKS = ["Услуги", "Преимущества", "Кейсы", "Этапы", "FAQ", "Контакты"];

const STATS = [
  { icon: "📁", color: "rgba(59,130,246,0.15)", num: "150+",   label: "Выполненных проектов" },
  { icon: "⭐", color: "rgba(139,92,246,0.15)", num: "8 лет",  label: "Опыта в веб-разработке" },
  { icon: "🚀", color: "rgba(16,185,129,0.15)", num: "6000 ₽", label: "Стоимость сайта под ключ" },
  { icon: "⚡", color: "rgba(249,115,22,0.15)", num: "1 день", label: "Минимальный срок запуска" },
];

const SERVICES = [
  {
    icon: "📋", bg: "rgba(139,92,246,0.2)", name: "Лендинг",
    desc: "Одностраничный сайт для рекламы и быстрого получения заявок.",
    features: ["Адаптивный дизайн", "Форма заявки", "Быстрый запуск"],
    price: "от 6000 ₽",
  },
  {
    icon: "🖥️", bg: "rgba(6,182,212,0.2)", name: "Сайт услуг",
    desc: "Многостраничный сайт для компаний и частных специалистов.",
    features: ["Уникальный дизайн", "Удобная структура", "SEO оптимизация"],
    price: "от 12000 ₽",
  },
  {
    icon: "📈", bg: "rgba(16,185,129,0.2)", name: "SEO продвижение",
    desc: "Выводим сайты в ТОП Яндекса и Google, увеличиваем трафик.",
    features: ["Анализ и стратегия", "Оптимизация сайта", "Рост позиций и трафика"],
    price: "от 10000 ₽/мес.",
  },
  {
    icon: "🎯", bg: "rgba(249,115,22,0.2)", name: "Яндекс Директ",
    desc: "Настраиваем рекламу, которая приводит реальных клиентов.",
    features: ["Настройка кампаний", "Оптимизация", "Отчётность"],
    price: "от 7000 ₽",
  },
];

const WHY = [
  { icon: "🚚", title: "Запуск от 1 дня",     desc: "Быстрый старт без лишних задержек." },
  { icon: "🛡️", title: "Гарантия качества",   desc: "Делаем сайты, которыми гордимся." },
  { icon: "🎧", title: "Поддержка 24/7",       desc: "Всегда на связи и готовы помочь." },
  { icon: "📊", title: "Результат",             desc: "Приводим клиентов и увеличиваем прибыль." },
  { icon: "💰", title: "Честные цены",          desc: "Без скрытых платежей и переплат." },
];

const CASES = [
  { emoji: "🏗️", bg: "linear-gradient(135deg,#1a2a4a,#0f1a2e)", tag: "Строительство", title: "Строительство домов под ключ", traffic: "+320%", leads: "85" },
  { emoji: "🏠", bg: "linear-gradient(135deg,#1a2a3a,#0f1820)", tag: "Ремонт квартир", title: "Ремонт квартир в Москве",        traffic: "+210%", leads: "62" },
  { emoji: "🏭", bg: "linear-gradient(135deg,#1e1a2a,#100f1e)", tag: "Производство",   title: "Производство металлоконструкций", traffic: "+430%", leads: "74" },
];

function ServiceCard({ icon, bg, name, desc, features, price }) {
  return (
    <div className="wp-service-card">
      <div className="wp-service-icon" style={{ background: bg }}>{icon}</div>
      <div className="wp-service-name">{name}</div>
      <div className="wp-service-desc">{desc}</div>
      <ul className="wp-service-features">
        {features.map(f => <li key={f}>{f}</li>)}
      </ul>
      <div className="wp-service-price">{price}</div>
    </div>
  );
}

function CaseCard({ emoji, bg, tag, title, traffic, leads }) {
  return (
    <div className="wp-case-card">
      <div className="wp-case-img" style={{ background: bg }}>
        <div className="wp-case-tag">{tag}</div>
        {emoji}
      </div>
      <div className="wp-case-body">
        <div className="wp-case-title">{title}</div>
        <div className="wp-case-stats">
          <div><div className="wp-case-stat-label">Рост трафика</div><div className="wp-case-stat-value">{traffic}</div></div>
          <div><div className="wp-case-stat-label">Заявок в месяц</div><div className="wp-case-stat-value">{leads}</div></div>
        </div>
        <div className="wp-case-btn">Смотреть кейс →</div>
      </div>
    </div>
  );
}

export default function AI() {
  const [cookieVisible, setCookieVisible] = useState(true);

  return (
    <div className="wp">
      <style>{styles}</style>

      {/* NAV */}
      <nav className="wp-nav">
        <div className="wp-logo">WEB<span>PRO</span></div>
        <ul className="wp-nav-links">
          {NAV_LINKS.map(l => <li key={l}><a href="#">{l}</a></li>)}
        </ul>
        <div className="wp-nav-right">
          <span className="wp-nav-phone">+7 (999) 999-99-99</span>
          <span className="wp-nav-hours">Ежедневно с 9:00 до 21:00</span>
        </div>
      </nav>

      {/* HERO */}
      <div className="wp-hero">
        <div className="wp-badge">Создание сайтов и продвижение</div>
        <h1 className="wp-h1">
          Создание сайтов<br />
          от <span className="price">6000 ₽</span>,<br />
          которые приводят<br />
          клиентов
        </h1>
        <p className="wp-hero-desc">
          Разрабатываем современные сайты и продвигаем их в Яндексе.
          Вы получите не просто сайт, а инструмент для роста вашего бизнеса.
        </p>
        <div className="wp-hero-cta">
          <button className="wp-btn-primary">📞 Позвонить сейчас</button>
          <button className="wp-btn-secondary">Наши услуги ↓</button>
        </div>
        <div className="wp-proof">
          <div className="wp-avatars">
            {["😊","👨","👩","🧑"].map((e, i) => (
              <div className="wp-avatar" key={i}>{e}</div>
            ))}
          </div>
          <p className="wp-proof-text">
            <strong>Более 150 довольных клиентов</strong><br />
            по всей России
          </p>
        </div>
      </div>

      {/* STATS */}
      <div className="wp-stats">
        <div className="wp-stats-grid">
          {STATS.map(s => (
            <div className="wp-stat" key={s.num}>
              <div className="wp-stat-icon" style={{ background: s.color }}>{s.icon}</div>
              <div>
                <div className="wp-stat-num">{s.num}</div>
                <div className="wp-stat-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="wp-section wp-services">
        <div className="wp-container">
          <div className="wp-section-label">Что мы делаем</div>
          <h2 className="wp-section-title">Наши услуги</h2>
          <p className="wp-section-sub">Комплексные решения для вашего бизнеса в интернете</p>
          <div className="wp-services-grid">
            {SERVICES.map(s => <ServiceCard key={s.name} {...s} />)}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="wp-section wp-why">
        <div className="wp-container">
          <div className="wp-section-label">Наши плюсы</div>
          <h2 className="wp-section-title">Почему выбирают нас</h2>
          <div className="wp-why-grid">
            {WHY.map(w => (
              <div className="wp-why-card" key={w.title}>
                <div className="wp-why-icon">{w.icon}</div>
                <div className="wp-why-title">{w.title}</div>
                <div className="wp-why-desc">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="wp-section wp-cases">
        <div className="wp-container">
          <div className="wp-section-label">Портфолио</div>
          <h2 className="wp-section-title">Наши кейсы</h2>
          <p className="wp-section-sub">Реальные результаты наших клиентов</p>
          <div className="wp-cases-grid">
            {CASES.map(c => <CaseCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="wp-cta-wrap">
        <div className="wp-cta">
          <div className="wp-cta-title">Готовы начать проект?</div>
          <p className="wp-cta-sub">
            Свяжитесь с нами любым удобным способом и получите бесплатную консультацию.
          </p>
          <button className="wp-btn-primary wp-cta">📞 Позвонить сейчас</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="wp-footer">
        <div className="wp-footer-grid">
          <div>
            <div className="wp-footer-logo">WEB<span>PRO</span></div>
            <p className="wp-footer-desc">Создание сайтов и продвижение для вашего бизнеса.</p>
            {cookieVisible && (
              <div className="wp-cookie">
                <span>
                  Мы используем cookie-файлы. Продолжая пользоваться сайтом,
                  вы соглашаетесь с нашей политикой конфиденциальности.
                </span>
                <button className="wp-cookie-btn" onClick={() => setCookieVisible(false)}>
                  Принять
                </button>
              </div>
            )}
          </div>
          <div className="wp-footer-col">
            <h4>Навигация</h4>
            <ul>
              {["Услуги","Кейсы","Преимущества","Этапы","FAQ","Контакты"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="wp-footer-col">
            <h4>Услуги</h4>
            <ul>
              {["Создание сайтов","SEO продвижение","Яндекс Директ","Поддержка сайтов"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="wp-footer-col">
            <h4>Контакты</h4>
            <div className="wp-contact-item">📞 <a href="tel:+79999999999" style={{color:"#9ca3af",textDecoration:"none"}}>+7 (999) 999-99-99</a></div>
            <div className="wp-contact-item">✉️ <a href="mailto:info@webpro.ru" style={{color:"#9ca3af",textDecoration:"none"}}>info@webpro.ru</a></div>
            <div className="wp-contact-item">🕐 Ежедневно с 9:00 до 21:00</div>
          </div>
        </div>
        <div className="wp-footer-bottom">
          <span>© 2026 WEBPRO. Все права защищены.</span>
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
}