# سامانه داشبورد مدیریتی (PP-App)

این پروژه یک پنل داشبورد مدرن، ماژولار و بهینه‌سازی‌شده است که با استفاده از **React 19**، **TypeScript** و **Vite** پیاده‌سازی شده و از طراحی اختصاصی با **Material UI** و پشتیبانی کامل از چینش **راست‌به‌چپ (RTL)** و حالت‌های تیره/روشن (Dark/Light mode) بهره می‌برد.

---

## ساختار درختی پروژه (Project Structure)

```text
PP-App/
├── public/                          # فایل‌های استاتیک و عمومی (لوگو و تصاویر)
│   ├── images/
│   │   └── Logo1.png
│   └── vite.svg
├── src/                             # سورس‌کد اصلی برنامه
│   ├── assets/                      # منابع گرافیکی و آیکون‌ها
│   │   ├── icons/                   # کامپوننت‌های SVG آیکون‌های سفارشی
│   │   └── hero.png
│   ├── components/                  # کامپوننت‌های رابط کاربری (UI Components)
│   │   ├── layouts/                 # ساختار و اسکلت اصلی صفحه
│   │   │   ├── DashboardLayout.tsx  # پوسته اصلی داشبورد و جانمایی سایدبار و هدر
│   │   │   ├── Header.tsx           # نوار بالای صفحه (عنوان داینامیک، ابزارها و دکمه‌ها)
│   │   │   └── Sidebar.tsx          # نوار کناری ناوبری تاشو با گرادیان و انیمیشن
│   │   └── sample/                  # کامپوننت‌های ماژول نمونه (Sample Module)
│   │       ├── SampleKpiCards.tsx       # کارت‌های شاخص عملکرد کلیدی (KPIs)
│   │       ├── SampleHeaderControls.tsx # کنترل‌های بالای صفحه (جستجو، فیلتر دسته‌ها، دکمه افزودن)
│   │       ├── SampleTable.tsx          # جدول نمایش داده‌ها همراه با صفحه‌بندی
│   │       ├── SampleFormDialog.tsx     # دیالوگ ثبت و ایجاد آیتم جدید
│   │       └── SampleValueDialog.tsx    # دیالوگ ویرایش سریع مقدار
│   ├── pages/                       # صفحات اصلی برنامه
│   │   └── SamplePage.tsx           # صفحه نمونه با پیاده‌سازی کامل CRUD و هماهنگی با URL
│   ├── providers/                   # ارائه‌دهندگان کانتکست‌های سراسری
│   │   ├── MaterialUIProvider.tsx  # تم MUI، استایل‌های سفارشی، فونت‌های فارسی و پلاگین RTL
│   │   └── ReduxProvider.tsx       # پرووایدر استور ریداکس و PersistGate
│   ├── schemas/                     # اعتبارسنجی داده‌ها و فرم‌ها با Zod
│   │   └── sampleSchemas.ts         # اسکیمای فرم‌های نمونه و رزالور react-hook-form
│   ├── store/                       # مدیریت حالت سراسری برنامه (Redux Toolkit)
│   │   ├── actions/                 # اکشن‌های ریداکس
│   │   ├── api/                     # اندپوینت‌های RTK Query
│   │   │   └── sampleApi.ts         # سرویس ارتباط با API نمونه‌ها و کشینگ داده‌ها
│   │   ├── reducers/                # اسلایس‌ها و ردیوسرها (تم، اطلاعات هدر و...)
│   │   ├── selectors/               # سلکتورهای استیت
│   │   ├── constants.ts             # تنظیمات و ثابت‌های استور
│   │   ├── types.ts                 # تایپ‌های مربوط به وضعیت سراسری
│   │   └── index.ts                 # ساخت استور و پیکربندی redux-persist
│   ├── App.tsx                      # پیکربندی روت‌ها و استایل‌های ریست سراسری
│   └── main.tsx                     # نقطه ورود اپلیکیشن (Entry Point)
├── .husky/                          # گیت هوک‌ها جهت کنترل کیفیت کد قبل از کامیت
├── .prettierrc                      # قوانین فرمت‌بندی کد با Prettier
├── eslint.config.js                 # تنظیمات لینت کد با ESLint (Flat Config)
├── index.html                       # فایل پایه HTML
├── package.json                     # پکیج‌ها، وابستگی‌ها و اسکریپت‌های اجرایی
├── tsconfig.json                    # پیکربندی TypeScript
└── vite.config.ts                   # تنظیمات سرور توسعه، آلیاس @ و پلاگین‌های Vite
```

---

## پشته فناوری (Tech Stack)

* **هسته اصلی:** [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vitejs.dev/)
* **کامپایلر React:** فعال‌سازی `babel-plugin-react-compiler` جهت بهینه‌سازی خودکار رندرهای کامپوننت‌ها
* **رابط کاربری:** `@mui/material` v9 + `@emotion/react` + `@emotion/styled`
* **راست‌به‌چپ (RTL):** `@mui/stylis-plugin-rtl` + `stylis`
* **مدیریت استیت:** `@reduxjs/toolkit` (RTK Query) + `redux-persist`
* **مسیریابی:** `react-router-dom` v7
* **مدیریت فرم و اعتبارسنجی:** `react-hook-form` + `zod`
* **اعلانات:** `react-toastify`

---

## دستورات اجرایی (Scripts)

```bash
# نصب پکیج‌ها
npm install

# اجرای سرور توسعه (پورت 5172)
npm run dev

# ساخت نسخه پروداکشن
npm run build

# بررسی خطاهای لینتر
npm run lint

# مرتب‌سازی و فرمت کدها
npm run format
```
