# سامانه داشبورد مدیریتی (PP-App - Next.js)

این پروژه یک پنل داشبورد مدرن، ماژولار و بهینه‌سازی‌شده است که با استفاده از **Next.js 15 (App Router)**، **React 19** و **TypeScript** پیاده‌سازی شده و از طراحی اختصاصی با **Material UI** و پشتیبانی کامل از چینش **راست‌به‌چپ (RTL)** و حالت‌های تیره/روشن (Dark/Light mode) همراه با **Server-Side Rendering (SSR)** بدون پرش استایل (Zero FOUC) بهره می‌برد.

---

## ساختار درختی پروژه (Project Structure)

```text
PP-App/
├── public/                          # فایل‌های استاتیک و عمومی (لوگو و تصاویر)
│   ├── images/
│   │   └── Logo1.png
│   └── favicon.svg
├── src/                             # سورس‌کد اصلی برنامه
│   ├── app/                         # سیستم مسیریابی App Router در Next.js
│   │   ├── (dashboard)/             # گروه مسیرهای داشبورد
│   │   │   ├── layout.tsx           # پوسته کلی صفحات داشبورد
│   │   │   ├── page.tsx             # صفحه اصلی (داشبورد)
│   │   │   ├── sample/
│   │   │   │   └── page.tsx         # صفحه ماژول نمونه (/sample)
│   │   │   └── samples/
│   │   │       └── page.tsx         # ریدایرکت خودکار به /sample
│   │   ├── globals.css              # استایل‌های پایه و عمومی برنامه
│   │   └── layout.tsx               # Root Layout اصلی (HTML, Body, Metadata, Providers)
│   ├── assets/                      # منابع گرافیکی و آیکون‌ها
│   │   └── icons/                   # کامپوننت‌های SVG آیکون‌های سفارشی
│   ├── components/                  # کامپوننت‌های رابط کاربری (UI Components)
│   │   ├── layouts/                 # ساختار و اسکلت اصلی صفحه
│   │   │   ├── DashboardLayout.tsx  # پوسته داشبورد و جانمایی سایدبار و هدر
│   │   │   ├── Header.tsx           # نوار بالای صفحه (عنوان داینامیک، ابزارها و دکمه‌ها)
│   │   │   └── Sidebar.tsx          # نوار کناری ناوبری با next/navigation
│   │   └── sample/                  # کامپوننت‌های ماژول نمونه (Sample Module)
│   │       ├── SampleKpiCards.tsx       # کارت‌های شاخص عملکرد کلیدی (KPIs)
│   │       ├── SampleHeaderControls.tsx # کنترل‌های بالای صفحه (جستجو، فیلتر دسته‌ها، دکمه افزودن)
│   │       ├── SampleTable.tsx          # جدول نمایش داده‌ها همراه با صفحه‌بندی
│   │       ├── SampleFormDialog.tsx     # دیالوگ ثبت و ایجاد آیتم جدید
│   │       └── SampleValueDialog.tsx    # دیالوگ ویرایش سریع مقدار
│   ├── pages/                       # صفحات منطقی برنامه
│   │   └── SamplePage.tsx           # صفحه نمونه با پیاده‌سازی کامل CRUD و هماهنگی با URL
│   ├── providers/                   # ارائه‌دهندگان کانتکست‌های سراسری
│   │   ├── ClientProviders.tsx      # تجمیع پرووایدرهای کلاینت برای App Router
│   │   ├── MaterialUIProvider.tsx   # تم MUI با Emotion Cache و useServerInsertedHTML برای RTL
│   │   └── ReduxProvider.tsx        # پرووایدر استور ریداکس و PersistGate
│   ├── schemas/                     # اعتبارسنجی داده‌ها و فرم‌ها با Zod
│   │   └── sampleSchemas.ts         # اسکیمای فرم‌های نمونه و رزالور react-hook-form
│   └── store/                       # مدیریت حالت سراسری برنامه (Redux Toolkit)
│       ├── actions/                 # اکشن‌های ریداکس
│       ├── api/                     # اندپوینت‌های RTK Query
│       │   └── sampleApi.ts         # سرویس ارتباط با API نمونه‌ها و کشینگ داده‌ها
│       ├── reducers/                # اسلایس‌ها و ردیوسرها (تم، اطلاعات هدر و...)
│       ├── selectors/               # سلکتورهای استیت
│       ├── constants.ts             # تنظیمات و ثابت‌های استور
│       ├── types.ts                 # تایپ‌های مربوط به وضعیت سراسری
│       └── index.ts                 # استور ریداکس سازگار با SSR و redux-persist
├── .husky/                          # گیت هوک‌ها جهت کنترل کیفیت کد قبل از کامیت
├── .prettierrc                      # قوانین فرمت‌بندی کد با Prettier
├── eslint.config.js                 # تنظیمات لینت کد با ESLint
├── next.config.ts                   # کانفیگ Next.js، Emotion و پروکسی API
├── next-env.d.ts                    # تعاریف تایپ Next.js
├── package.json                     # وابستگی‌ها و اسکریپت‌های اجرایی
└── tsconfig.json                    # پیکربندی TypeScript برای Next.js
```

---

## پشته فناوری (Tech Stack)

* **فریم‌ورک اصلی:** [Next.js 15 (App Router)](https://nextjs.org) + [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org/)
* **رابط کاربری و استایلینگ:**
  * `@mui/material` v6 + `@emotion/react` + `@emotion/styled`
  * چینش راست‌به‌چپ (RTL) با `@mui/stylis-plugin-rtl` و تزریق استایل‌های سرور از طریق `useServerInsertedHTML`
  * سیستم تم دوگانه دارک/لایت با پالت رنگی هماهنگ و فونت‌های فارسی
* **مدیریت استیت:**
  * `@reduxjs/toolkit` (RTK Query) با قابلیت کشینگ خودکار و مدیریت تگ‌ها
  * `redux-persist` با ذخیره‌سازی محلی و fallback امن در محیط سرور (Noop Storage)
* **مسیریابی:** سیستم فایل‌محور Next.js 15 App Router با هوک‌های `useRouter`, `usePathname`, `useSearchParams` از `next/navigation`
* **مدیریت فرم و اعتبارسنجی:** `react-hook-form` + `zod`
* **اعلانات:** `react-toastify`

---

## دستورات اجرایی (Scripts)

```bash
# نصب وابستگی‌ها
npm install

# اجرای سرور توسعه بر روی پورت 5172
npm run dev

# ساخت نسخه نهایی پروداکشن
npm run build

# اجرای نسخه پروداکشن
npm run start

# بررسی خطاهای لینتر
npm run lint

# مرتب‌سازی و قالب‌بندی کدها
npm run format
```
