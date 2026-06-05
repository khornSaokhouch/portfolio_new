export const projects = [
  // ─── Web Projects ───────────────────────────────────────────────────────────
  {
    id: "11",
    DeveloperType: "web",
    Img: "/assets/projects/project11.png",
    Title: "Food Delivery Website",
    Description: "A modern and interactive frontend interface for a food delivery platform. Built with Angular and styled using Tailwind CSS, this project focuses on delivering a seamless user experience for browsing menus, managing cart items, and checking out. It features a responsive design that works flawlessly across mobile and desktop devices.",
    Category: "Frontend",
    ProjectLink: "https://food-shop-frontend.vercel.app/",
    TechStack: ["Angular", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/food-shop-frontend",
    Team: ["Khorn saokhouch"],
    Features: [
      "Interactive menu browsing with category filtering",
      "Dynamic shopping cart management with real-time updates",
      "Responsive layout optimized for both mobile and desktop",
      "Modern UI animations and smooth page transitions"
    ],
    Scope: "Frontend development focusing on user interface, state management, and user experience design.",
    TechnicalDetails: "Developed using the Angular framework for robust component architecture. Styled entirely with Tailwind CSS utility classes. State management is handled through Angular services and RxJS observables.",
    Hosting: "Vercel"
  },
  {
    id: "10",
    DeveloperType: "web",
    Img: "/assets/projects/project10.png",
    Title: "Shopping Store Website",
    Description: "A full-stack e-commerce solution designed for a shopping store. The frontend is built with Vue.js and Tailwind CSS for a highly responsive and reactive user interface. The backend API is powered by Laravel, managing user authentication, product catalog, and order processing, with MySQL serving as the robust relational database.",
    Category: "Frontend",
    ProjectLink: "https://food-delivery-website.vercel.app",
    TechStack: ["Vue js", "Laravel", "Mysql", "tailwindcss"],
    Github: "",
    Team: ["Khorn saokhouch"],
    Features: [
      "Complete product catalog with search and filtering",
      "User authentication and profile management",
      "Secure checkout process and order history",
      "Admin dashboard for product and order management"
    ],
    Scope: "Full-stack development including API design, database schema creation, and frontend integration.",
    TechnicalDetails: "The frontend is a Single Page Application (SPA) built with Vue.js. The backend is a RESTful API built with Laravel PHP framework. Uses MySQL for relational data integrity and Eloquent ORM for database interactions.",
    Hosting: "Vercel (Frontend)"
  },
  {
    id: "8",
    DeveloperType: "web",
    Img: "/assets/projects/project8.png",
    Title: "E-commerce Website",
    Description: "A comprehensive e-commerce platform offering a robust shopping experience. The frontend utilizes Next.js for server-side rendering and SEO optimization, combined with Tailwind CSS for premium styling. The backend is driven by Laravel, handling complex business logic, inventory management, and secure transactions, all stored in a MySQL database.",
    Category: "Fullstack",
    ProjectLink: "https://frontend-e.onrender.com",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/frontend_e",
    Team: ["Khorn saokhouch"],
    Features: [
      "Server-side rendered (SSR) pages for optimal SEO",
      "Advanced shopping cart with complex state management",
      "Secure user authentication (JWT/Sanctum)",
      "Comprehensive product inventory management"
    ],
    Scope: "End-to-end full-stack development, from database architecture to responsive frontend implementation.",
    TechnicalDetails: "Frontend built with Next.js App Router for optimized performance. Backend uses Laravel Sanctum for API authentication. Data flows via standard REST API requests. State managed using React Context/Redux.",
    Hosting: "Render"
  },
  {
    id: "9",
    DeveloperType: "web",
    Img: "/assets/projects/project9.png",
    Title: "Order Coffee System Web Application",
    Description: "A specialized web application for managing coffee orders in a cafe environment. It features a sleek Next.js frontend where customers can customize their coffee orders, and a Laravel backend for cafe staff to manage incoming orders in real-time. The system is designed to streamline the ordering process, track sales, and reduce wait times.",
    Category: "Fullstack",
    ProjectLink: "https://coffee-web-app-gamma.vercel.app",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/Coffee-web-app",
    Team: ["Khorn saokhouch"],
    Features: [
      "Customizable coffee ordering interface (size, milk, sugar levels)",
      "Real-time order tracking for customers",
      "Staff dashboard for managing and updating order statuses",
      "Sales tracking and reporting"
    ],
    Scope: "Full-stack web application tailored for food and beverage point-of-sale efficiency.",
    TechnicalDetails: "Built using Next.js for the customer-facing app and staff dashboard. Laravel API handles complex business logic like pricing calculations based on customization options. Uses MySQL for transaction records.",
    Hosting: "Vercel"
  },
  {
    id: "12",
    DeveloperType: "web",
    Img: "/assets/projects/project12.png",
    Title: "CINEHUB Movie Website",
    Description: "A dynamic movie discovery platform built with Next.js. It integrates directly with the TMDB API to fetch real-time data about popular movies, TV shows, and cast information. Users can search for titles, view detailed information, and explore trending content in a visually appealing dark-themed interface styled with Tailwind CSS.",
    Category: "Frontend",
    ProjectLink: "https://cinehub-sepia.vercel.app/",
    TechStack: ["Next js", "TMDB api", "tailwindcss"],
    Github: "https://github.com/khornSaokhouch/cinehub",
    Team: ["Khorn saokhouch"],
    Features: [
      "Real-time fetching of trending movies and TV shows",
      "Detailed view for individual movies including cast and trailers",
      "Search functionality with instant results",
      "Fully responsive dark-mode UI"
    ],
    Scope: "Frontend development focusing on API integration and data visualization.",
    TechnicalDetails: "Developed with Next.js utilizing Server Components for initial data fetching. Makes extensive use of the TMDB REST API. Styled with Tailwind CSS focusing on a cinematic dark theme.",
    Hosting: "Vercel"
  },
  {
    id: "1",
    DeveloperType: "web",
    Img: "/assets/projects/project7.png",
    Title: "Service Me Website",
    Description: "Service Me is a comprehensive platform connecting service providers with customers. Built as a team project, it features a Next.js frontend and a Laravel backend. The application supports user registration, service listing, booking management, and reviews. It demonstrates strong full-stack capabilities and collaborative team development.",
    Category: "Fullstack",
    ProjectLink: "https://www.servicemeite.io",
    TechStack: ["Next js", "Laravel", "Mysql", "tailwindcss"],
    Github: "https://github.com/kheangsenghorng/WCT-II-Service",
    Team: ["Khorn saokhouch", "Sen vibol", "Sam Nisa", "Kheng senhorng", "Chen SreyNeat"],
    Features: [
      "Multi-role user system (Customers and Service Providers)",
      "Service creation, listing, and categorization",
      "Integrated booking and appointment scheduling system",
      "Rating and review system for completed services"
    ],
    Scope: "Large-scale team project covering full software development lifecycle from planning to deployment.",
    TechnicalDetails: "Next.js frontend connects to a complex Laravel API. Involved extensive database design with multiple relational tables in MySQL. Managed version control collaboratively via GitHub.",
    Hosting: "Custom Domain (servicemeite.io)"
  },
  {
    id: "2",
    DeveloperType: "web",
    Img: "/assets/projects/project2.png",
    Title: "Booking Tour Website",
    Description: "A robust tour booking system developed using Next.js and Node.js. It allows users to browse available tours, check itineraries, and make bookings. The frontend is optimized for performance using React and Tailwind CSS, while the Node.js backend efficiently handles the API requests, user authentication, and database interactions.",
    Category: "Fullstack",
    ProjectLink: "",
    TechStack: ["Nodejs", "Nextjs", "React", "Tailwindcss"],
    Github: "https://github.com/khornSaokhouch/BookingTourWebsite-Frontend",
    Team: ["Khorn saokhouch", "Sam Nisa", "Sen vibol", "Kheng senhorng"],
    Features: [
      "Tour catalog with detailed itineraries and image galleries",
      "Date selection and availability checking",
      "User accounts for booking history management",
      "Admin panel for managing tours and bookings"
    ],
    Scope: "Full-stack application focusing on booking logic and availability management.",
    TechnicalDetails: "Frontend uses Next.js with React hooks for complex state management (like date pickers). Backend is built with Node.js/Express handling JWT authentication and interacting with the database.",
    Hosting: "Local/Development"
  },
  {
    id: "3",
    DeveloperType: "web",
    Img: "/assets/projects/project3.png",
    Title: "CookBook Website",
    Description: "A recipe sharing and discovery platform built with Next.js and Supabase. Users can browse various recipes, add their own culinary creations, and manage their favorite dishes. Supabase provides a scalable backend-as-a-service solution, handling secure authentication and database storage, while Tailwind CSS ensures a beautiful and responsive UI.",
    Category: "Fullstack",
    ProjectLink: "https://bookcook.servicemeite.io",
    TechStack: ["Nextjs", "Tailwindcss", "Supabase"],
    Github: "https://github.com/khornSaokhouch/Bookbook_supabase",
    Team: ["Khorn saokhouch", "Sam Nisa", "Sen vibol"],
    Features: [
      "User authentication and profile management via Supabase Auth",
      "Create, read, update, and delete (CRUD) functionality for recipes",
      "Image uploading and storage for recipe photos",
      "Save favorite recipes for quick access"
    ],
    Scope: "Full-stack development leveraging Backend-as-a-Service (BaaS) for rapid delivery.",
    TechnicalDetails: "Built exclusively with Next.js App Router. Integrates Supabase Postgres database and Supabase Storage for images. Uses Supabase client for direct database interactions from Server Actions.",
    Hosting: "Vercel"
  },
  {
    id: "7",
    DeveloperType: "web",
    Img: "/assets/projects/project1.png",
    Title: "Flower-Shop-website",
    Description: "A beautifully crafted static website for a local flower shop. Developed purely with HTML and CSS, this project focuses on semantic markup, responsive design principles, and custom CSS animations. It serves as a lightweight, fast-loading digital storefront to showcase floral arrangements and shop details.",
    ProjectLink: "https://flower-shop-website-three.vercel.app",
    Category: "Frontend",
    TechStack: ["HTML", "CSS"],
    Github: "https://github.com/khornSaokhouch/Flower-Shop-website",
    Team: ["Khorn saokhouch"],
    Features: [
      "Clean, semantic HTML5 structure",
      "Custom CSS styling without frameworks",
      "Fully responsive design utilizing CSS Flexbox and Grid",
      "Smooth CSS hover effects and animations"
    ],
    Scope: "Frontend web design focusing on core web technologies.",
    TechnicalDetails: "Built without JavaScript to demonstrate strong foundational knowledge of HTML and advanced CSS techniques. Optimized for extremely fast load times.",
    Hosting: "Vercel"
  },

  // ─── Android Projects ────────────────────────────────────────────────────────
  {
    id: "android-1",
    DeveloperType: "android",
    Img: "/assets/projects/android/project1.png",
    Title: "Saby-Tinh App",
    Description: "A native mobile application built for seamless user experiences. Currently in active development.",
    Category: "Native",
    ProjectLink: "",
    TechStack: ["Kotlin", "Android Studio"],
    Github: "",
    Team: ["Khorn saokhouch"],
    Features: [
      "Native Android performance",
      "Modern Material UI",
      "Offline capabilities"
    ],
    Scope: "Mobile Development",
    TechnicalDetails: "Built natively for Android devices.",
    Hosting: "Local"
  },
  {
    id: "android-2",
    DeveloperType: "android",
    Img: "",
    Title: "Coffee App",
    Description: "An Android-based application for ordering coffee. Designed with a focus on speed and intuitive navigation.",
    Category: "Native",
    ProjectLink: "",
    TechStack: ["Java/Kotlin", "Android SDK"],
    Github: "",
    Team: ["Khorn saokhouch"],
    Features: [
      "Quick ordering system",
      "User-friendly interface",
      "Menu browsing"
    ],
    Scope: "Mobile Development",
    TechnicalDetails: "Native Android application.",
    Hosting: "Local"
  },
  {
    id: "android-3",
    DeveloperType: "android",
    Img: "",
    Title: "Booking Tour",
    Description: "A comprehensive tour booking application for Android devices, allowing users to discover and book travel experiences.",
    Category: "Native",
    ProjectLink: "",
    TechStack: ["Android Studio", "API Integration"],
    Github: "",
    Team: ["Khorn saokhouch"],
    Features: [
      "Tour discovery",
      "Booking management",
      "Location services"
    ],
    Scope: "Mobile Development",
    TechnicalDetails: "Integrated with backend APIs for real-time booking data.",
    Hosting: "Local"
  }
];
