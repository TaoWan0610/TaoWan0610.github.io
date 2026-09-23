// ============================================================
// Tao Wan homepage content
// Edit THIS file for normal updates. You usually do not need to touch
// index.html or stylesheet.css.
//
// Simple formatting supported in bio/authors:
//   **bold text**
//   [link text](https://example.com)
// ============================================================

window.siteData = {
  profile: {
    name: "Tao Wan",
    tagline: "Ph.D. Student · SUSTech · High-rate Visual Perception & Event-based Vision",
    photo: "assets/img/tao_wan.jpg",
    photoFallback: "TW",

    socialLinks: [
      {
        label: "Email",
        url: "mailto:want2025@mail.sustech.edu.cn",
        icon: "email"
      },
      {
        label: "CV",
        url: "assets/pdf/Tao_Wan_CV.pdf",
        icon: "cv"
      },
      {
        label: "GitHub",
        url: "https://github.com/Tao0v0",
        icon: "github"
      },
      {
        label: "Scholar",
        url: "https://scholar.google.com/citations?user=g3tyqHgAAAAJ&hl=en",
        icon: "scholar"
      }
    ],

    bio: [
      "I am a Ph.D. student at [Southern University of Science and Technology (SUSTech)](https://www.sustech.edu.cn/en/), Shenzhen, China, under the supervision of [Prof. Zhongrui Wang](https://scholar.google.com/citations?user=Ofl3nUsAAAAJ&hl=en) and [Prof. Xiaojuan Qi](https://scholar.google.com/citations?user=bGn0uacAAAAJ&hl=en&oi=ao). Before joining SUSTech, I received my M.Sc. degree in Electrical and Electronic Engineering from [The University of Hong Kong (HKU)](https://www.hku.hk/) and my B.Eng. degree in Information and Communication Engineering from [UESTC](https://en.uestc.edu.cn/).",
      "My research focuses on **efficient visual perception for dynamic and resource-constrained systems**, with an emphasis on high-rate multimodal perception and deployment-oriented model optimization. On the perception side, I study how complementary sensing modalities, particularly RGB and event cameras, can enable accurate and temporally responsive scene understanding beyond the frame-rate limitations of conventional vision.",
      "In parallel, I am interested in **efficient deep learning and edge AI**, including quantization-aware training, model compression, hardware-aware optimization, and deployment on resource-constrained embedded and accelerator platforms. More broadly, my research spans multimodal perception, efficient inference, and hardware-software co-design for autonomous and embodied systems."
    ]
  },

  publicationsHeader: {
    title: "Selected Publications",
    note: "Selected research",
    fullListLabel: "Full Publications →",
    fullListUrl: "https://scholar.google.com/citations?user=g3tyqHgAAAAJ&hl=en"
  },

  publications: [
    {
      title: "LiFR v2: Completion-Augmented Event Propagation for High-Rate Dense Prediction",
      authors: "**Tao Wan***, **Xiaoshan Wu***, Yifei Yu, Bo Wang, Xiaoyang Lyu, Muxin Liu, Aoxuan Pan, Zhongrui Wang, Xiaojuan Qi (* co-first authors)",
      venue: "arXiv, 2026",
      image: "assets/img/lifr-v2.jpg",
      imageAlt: "LiFR v2: high-rate dense prediction with RGB and events",
      fallbackTitle: "LiFR v2",
      fallbackSubtitle: "High-Rate Dense Prediction",
      description: "A propagation-completion-memory framework for causal anytime and streaming dense prediction from a single RGB keyframe and event observations, supporting semantic segmentation, monocular depth estimation, and multi-task prediction.",
      links: [
        {
          label: "Paper",
          url: "https://arxiv.org/abs/2609.25803"
        },
        {
          label: "Code",
          url: "https://github.com/TaoWan0610/LiFR-v2"
        }
      ]
    },
    {
      title: "Topology optimization of random memristors for input-aware dynamic SNN",
      authors: "Bo Wang, Xinyuan Zhang, Shaocong Wang, Ning Lin, Yi Li, Yifei Yu, Yue Zhang, Jichang Yang, Xiaoshan Wu, Yangu He, Songqi Wang, **Tao Wan**, Rui Chen, Guoqi Li, Yue Deng, Xiaojuan Qi, Zhongrui Wang, Dashan Shang",
      venue: "Science Advances, 2025",
      image: "assets/img/prime.jpg",
      imageAlt: "Topology optimization of random memristors for input-aware dynamic SNN",
      fallbackTitle: "PRIME",
      fallbackSubtitle: "Dynamic Memristive SNN",
      description: "Topology optimization and input-aware dynamic inference for memristive spiking neural networks, enabling adaptive computation and energy-efficient neuromorphic processing.",
      links: [
        {
          label: "Paper",
          url: "https://www.science.org/doi/10.1126/sciadv.ads5340"
        },
        {
          label: "Code",
          url: "https://github.com/bo-wang-up/PRIME"
        }
      ]
    }
  ],

  footer: {
    left: "© 2026 Tao Wan",
    right: "Built with HTML & CSS · Hosted on GitHub Pages"
  }
};
