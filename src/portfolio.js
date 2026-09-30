/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const portfolioUrl =
  process.env.REACT_APP_PORTFOLIO_URL || "https://Franco3010.github.io/developerFolio";

const greeting = {
  username: "Ngo Duc Anh",
  title: "はじめまして、アインと申します。",
  subTitle: emoji(
    "エンジニアとして2年半の経験があり、1年目はバックエンド、2年目はバックエンドとフロントエンドを担当しました。これまで独学でJLPTに挑戦し、一度も不合格になったことがありません。その自信をもとに、昨年会社を退職して日本語学習に集中し、2025年12月にJLPT N2に合格しました。現在はBrSEインターンとして働いています。今後は技術力だけでなく、日本語力も伸ばしたいです。よろしくお願いいたします。"
  ),
  resumeLink: `${portfolioUrl}/CV_Ngo_Duc_Anh.xlsx`,
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "ducanhngo3010@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "スキル",
  subTitle: "バックエンド開発を中心とした技術と語学力",
  skills: [
    "言語・フレームワーク：Node.js、NestJS、TypeScript、Next.js、Java、Spring Boot",
    "データベース：PostgreSQL、MongoDB",
    "ツール：TypeORM、Swagger、GitLab、Bull、Firebase、Git、Postman",
    "言語力：日本語（JLPT N2）、英語（Aptis B2）"
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ハノイ工科大学（HUST）",
      subHeader: "ソフトウェア工学科",
      duration: "2022年卒業",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "正社員",
      company: "Hisoft Company",
      date: "2022年9月〜2023年10月",
      desc: "",
      descBullets: []
    },
    {
      role: "正社員",
      company: "Locamos Company",
      date: "2024年1月〜2025年4月",
      desc: "",
      descBullets: []
    },
    {
      role: "日本語学習・BrSE研修",
      company: "就業なし（学習期間）",
      date: "2025年5月〜2026年7月",
      desc: "",
      descBullets: [
        "前半（2025年5月〜12月）：就業せず、日本語を独学で学習し、JLPT N2に合格。",
        "後半（2026年1月〜7月）：VIETISのBrSE研修を受講。"
      ]
    },
    {
      role: "BrSEインターン",
      company: "VIETIS Corporation",
      date: "2026年7月〜現在",
      desc: "会計システム開発プロジェクトに参加。",
      descBullets: [
        "お客様から頂いた基本設計に基づいてQAを作成し、同僚にレビューを依頼",
        "週次報告書の作成、開発者とのQA対応",
        "基本設計内容のベトナム語翻訳"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false",
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "主な開発実績",
  subtitle: "前職で担当したプロジェクト",
  projects: [
    {
      projectName: "LCGコイン管理システム（LOCAGO）",
      projectDesc: "仮想通貨（コイン）を管理するWebサービス。5名体制のチームで、データベース設計からREST API開発までを担当しました。",
      details: [
        {label: "対象ユーザー", value: "エンドユーザー、管理者（ユーザー向けシステム・管理システム）"},
        {label: "使用技術", value: "Node.js、NestJS、Next.js、TypeScript、PostgreSQL、MongoDB"},
        {label: "技術選定の理由", value: "PostgreSQLは、業務内容が明確でテーブル構造が変わりにくいデータに適しており、制約・トランザクション・分離レベルによってデータの正確性を保てるため、金銭に関わる機能に採用しました。MongoDBは更新頻度が低いシンプルな業務データに使用し、関連データを1つのドキュメントにまとめることで、複数テーブルの結合を避け、データ取得を効率化しました。"},
        {label: "担当範囲", value: "データベース設計、REST API開発、日利計算機能、Excel出力機能、管理画面の一部実装"},
        {label: "役割", value: "バックエンド"},
        {label: "期間", value: "2024年1月〜2025年4月"}
      ],
    },
    {
      projectName: "不動産仲介システム（RECBOOK）",
      projectDesc: "不動産仲介業務を支援するWebサービス。5名体制のチームで、REST API開発、データベースマイグレーション管理、社内チーム向け通知機能を担当しました。",
      details: [
        {label: "対象ユーザー", value: "エンドユーザー"},
        {label: "使用技術", value: "Node.js、NestJS、TypeScript、PostgreSQL、Firebase、Bull、GitLab"},
        {label: "担当範囲", value: "REST API開発、データベースマイグレーション管理、社内チーム向け通知機能、ユーザー別レポート集計機能"},
        {label: "役割", value: "バックエンド・フロントエンド"},
        {label: "期間", value: "2022年9月〜2023年10月"},
        {label: "補足", value: "ER図は概要把握を目的としており、SQLの項目はすべて記載していません。"}
      ],
    },
    {
      projectName: "eSIM管理システム",
      projectDesc: "eSIM管理を行うWebサービス。2名体制のチームで、Spring BootとMongoDBによるバックエンド開発、管理者・ユーザー管理機能、eSIM関連機能を担当しました。",
      details: [
        {label: "対象ユーザー", value: "管理者"},
        {label: "使用技術", value: "Java、Spring Boot、Next.js、MongoDB"},
        {label: "担当範囲", value: "バックエンド開発、管理者・ユーザー管理、eSIM情報照会、通信キャリアAPI連携、料金プラン管理"},
        {label: "役割", value: "バックエンド・フロントエンド"},
        {label: "期間", value: "2024年6月（3週間）"}
      ],
    }
  ],
  resourceLinks: [
    {
      projectName: "LCGコイン管理システム（LOCAGO）",
      links: [
        {name: "日利計算のER図", url: "https://dbdiagram.io/d/日利計算に関するテーブル-6abbbbbf5869425612ca5f6e"},
        {name: "送金制限のER図", url: "https://dbdiagram.io/d/6abbb9155869425612ca2f2b"}
      ]
    },
    {
      projectName: "不動産仲介システム（RECBOOK）",
      links: [
        {name: "お知らせ・レポート機能のER図", url: "https://dbdiagram.io/d/6abbab815869425612c943f1"},
        {name: "お知らせ機能の改善資料", url: "https://docs.google.com/presentation/d/1wKKvknaEZcUi7rgSGoDZ4POWOXm0ExbL/edit?usp=sharing&ouid=116077687996630705551&rtpof=true&sd=true"}
      ]
    },
    {
      projectName: "eSIM管理システム",
      links: [
        {name: "データベース設計の説明", url: "https://docs.google.com/document/d/1c7ophKIyPc7soRgJ9eb0EubbJ5hbFZ4oeQly4GEh4zw/edit?usp=sharing"}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "資格・実績",
  subtitle: "取得資格",

  achievementsCards: [
    {
      title: "JLPT N2",
      subtitle: "2025年12月取得",
      footerLink: [
        {
          name: "証明書を見る",
          url: "https://photos.app.goo.gl/iidrUKkEbceUTVo86"
        }
      ]
    },
    {
      title: "Aptis English B2",
      subtitle: "2022年取得",
      footerLink: [
        {
          name: "証明書を見る",
          url: "https://photos.app.goo.gl/MiPa9CSVxYKh4RPUA"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const learningGoals = {
  title: "今後の学習目標",
  description:
    "JavaやAWSサービスは実務経験が限られているため、今後機会があれば積極的に取り組みたいと考えています。",
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "職務経歴書",
  subtitle: "職務経歴書をダウンロード",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "連絡先",
  subtitle: "ご連絡はメールにてお願いいたします。",
  number: "",
  email_address: "ducanhngo3010@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  learningGoals,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
