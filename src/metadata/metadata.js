module.exports = {
  name: 'Geraldo Francisco de Oliveira Junior',
  title: 'Research Assistant at ETH Zurich',
  facts: {
    // 'Residence': '<a href="https://www.google.com/maps/place/London,+UK/@51.5285582,-0.2416814,11z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5072178!4d-0.1275862"><i class="fa fa-home fact-icon"></i>London</a>',
    // 'Wiki': `<a href="https://en.wikipedia.org/wiki/William_Shakespeare">
    //               <i class="fa-brands fa-wikipedia-w fact-icon"></i>William_Shakespeare
    //             </a>`,

    'Reach me': `<a href="https://dblp.org/pid/197/9584.html"><i class="fa fa-graduation-cap fact-icon" aria-hidden="true"></i></a>
    <a href="https://github.com/geraldofojunior"><i class="fa-brands fa-github fact-icon"></i></a>
    <a href="https://www.linkedin.com/in/geraldo-francisco-de-oliveira-junior-966b48113/"><i class="fa-brands fa-linkedin fact-icon"></i></a>
    <a href="https://twitter.com/geraldofojunior"><i class="fa-brands fa-twitter fact-icon"></i></a>`,
    '': '<a href="mailto:geraldod@safari.ethz.ch"><i class="fa fa-envelope fact-icon"></i>geraldod@safari.ethz.ch</a>',
    
  },
  skills: [
    // ['Comedy', 100],
    // ['Love', 100],
    // ['Theater', 100],
    // ['Tragedy', 100],
    // ['Poetry', 100],
    // ['Erotic', 75],
    // ['Sonnets', 100],
    // ['Plays', 100],
    // ['Writing', 100],
    // ['Directing', 75],
    // ['Literature', 100],
    // ['Influence', 100],
  ],
  educations: [
    {school: 'ETH Zürich', degree: 'PhD in Information Tech. and Electrical Engineering', period: '2024 (expected)'},
    {school: 'Federal University of Rio Grande do Sul', degree: 'MSc in Computer Science', period: '2017'},
    {school: 'Federal University of Vicosa', degree: 'BSc in Computer Science', period: '2015'},
    // {school: 'Eskisehir Fatih Science High School', degree: '', period: '2006'},
  ],
  positions: [
    {
      period: 'Nov 2018 - Present',
      title: 'Research and Teaching Assistant',
      organization: 'ETH Zürich',
      contents: ``
    },
    {
      period: 'Apr 2019 - Sep 2019',
      title: 'Hardware Engineering Intern',
      organization: 'Google',
      contents: ``
    },
    {
      period: 'Nov 2017 - Oct 2018',
      title: 'Research Intern',
      organization: 'ETH Zurich',
      contents: ``
    },
    {
      period: 'Mar 2016 - Aug 2017',
      title: 'Research and Teaching Assistant',
      organization: 'Federal University of Rio Grande do Sul',
      contents: ``
    },
    {
      period: 'Jul 2015 - Dec 2015',
      title: 'Undergrad Research Assistant',
      organization: 'Federal University of Vicosa',
      contents: ``
    },
    {
      period: 'Mar 2014 - May 2014',
      title: 'Undergrad Research Assistant',
      organization: 'Federal University of Vicosa',
      contents: ``
    },

  ],
  ownpapers: [
    {
      title: 'Extending Memory Capacity in Consumer Devices with Emerging Non-Volatile Memory: An Experimental Study',
      venue: 'IEEE Access 2023',
      citation: '<u>G. F. Oliveira</u>, S. Ghose, J. Gómez-Luna, A. Boroumand, A. Savery, S. Rao, S. Qazi, G. Grignou, R. Thakur, E. Shiu, and Onur Mutlu, <b>"Extending Memory Capacity in Consumer Devices with Emerging Non-Volatile Memory: An Experimental Study","</b> IEEE Access, 2023.',
      keywords: ['consumer devices', 'emerging memory', 'web browsing', 'dram', 'optane', 'chromebook'],
      awards: [],
      summary:`
      In this work, we provide the first analysis of the impact of extending the main memory space of consumer devices using off-the-shelf NVMs. We extensively examine system performance and energy consumption when the NVM device is used as swap space for DRAM main memory to effectively extend the main memory capacity. For our analyses, we equip real web-based Chromebook computers with the Intel Optane SSD, which is a state-of-the-art low-latency NVM-based SSD device. We compare the performance and energy consumption of interactive workloads running on our Chromebook with NVM-based swap space, where the Intel Optane SSD capacity is used as swap space to extend main memory capacity, against two state-of-the-art systems: (i) a baseline system with double the amount of DRAM than the system with the NVM-based swap space; and (ii) a system where the Intel Optane SSD is naively replaced with a state-of-the-art (yet slower) off-the-shelf NAND-flash-based SSD, which we use as a swap space of equivalent size as the NVM-based swap space.
      `,
      sources:[ 
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2111.02325.pdf'}
          ]
        },
      ]
    },
    {
      title: 'Heterogeneous Data-Centric Architectures for Modern Data-Intensive Applications: Case Studies in Machine Learning and Databases',
      venue: 'ISVLSI 2022',
      citation: `<u>G. F. Oliveira</u>, A. Boroumand, S. Ghose, J. Gómez-Luna, and O. Mutlu,
      <b> "Heterogeneous Data-Centric Architectures for Modern Data-Intensive Applications: Case Studies in Machine Learning and Databases," </b>
      in Proceedings of the IEEE Computer Society Annual Symposium on VLSI (ISLVSI), Nicosia, Cyprus, 2022.`,
      keywords: ['memory', 'dram', 'processing-in-memory', 'machine learning', 'databases'],
      awards: [],
      summary:`
      We showcase the benefits of co-designing algorithms and hardware in a way that efficiently takes advantage of the PIM paradigm for two modern data-intensive applications: (1) machine learning inference models for edge devices and (2) hybrid transactional/analytical processing databases for cloud systems. We follow a two-step approach in our system design. In the first step, we extensively analyze the computation and memory access patterns of each application to gain insights into its hardware/software requirements and major sources of performance and energy bottlenecks in processor-centric systems. In the second step, we leverage the insights from the first step to co-design algorithms and hardware accelerators to enable high-performance and energy-efficient data-centric architectures for each application.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/abstract/document/9912106'}
          ]
        },
        {
          text:'arXiv',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2205.14664.pdf'}
          ]
        }
      ]
    },
    {
      title: 'Methodologies, Workloads, and Tools for Processing-in-Memory: Enabling the Adoption of Data-Centric Architectures',
      venue: 'ISVLSI 2022',
      citation: `<u>G. F. Oliveira</u>, J. Gómez-Luna, S. Ghose, and O. Mutlu,
      <b> "Methodologies, Workloads, and Tools for Processing-in-Memory: Enabling the Adoption of Data-Centric Architectures," </b>
      in Proceedings of the IEEE Computer Society Annual Symposium on VLSI (ISLVSI), Nicosia, Cyprus, 2022.`,
      keywords: ['memory', 'dram', 'processing-in-memory', 'benchmarking', 'frameworks'],
      awards: [],
      summary:`
      Our goal in this work is to provide tools and system support for PnM and PuM architectures, aiming to ease the adoption of PIM in current and future systems. With this goal in mind, we address two limitations of prior works related to (i) identifying and characterizing workloads suitable for PnM offloading and (ii) enabling complex operations in PuM architectures. First, we develop a methodology, called DAMOV, that identifies sources of data movement bottlenecks in applications and associates such bottlenecks with PIM suitability. Second, we propose an end-to-end framework, called SIMDRAM, that enables the implementation of complex inDRAM operations transparently to the programmer.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/document/9912064'}
          ]
        },
        {
          text:'arXiv',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2205.14647.pdf'}
          ]
        }
      ]
    },
    {
      title: 'Accelerating Neural Network Inference With Processing-in-DRAM: From the Edge to the Cloud',
      venue: 'ISVLSI 2022',
      citation: `<u>G. F. Oliveira</u>, J. Gómez-Luna, S. Ghose, and O. Mutlu,
      <b> "Accelerating Neural Network Inference With Processing-in-DRAM: From the Edge to the Cloud," </b>
      IEEE Micro, vol. 42, no. 6, pp. 25-38, 1 Nov.-Dec. 2022.`,
      keywords: ['memory', 'dram', 'processing-in-memory', 'neural networks', 'inference'],
      awards: [],
      summary:`
      Neural networks (NNs) are growing in importance and complexity. An NN's performance (and energy efficiency) can be bound either by computation or memory resources. The processing-in-memory (PIM) paradigm, where computation is placed near or within memory arrays, is a viable solution to accelerate memory-bound NNs. However, PIM architectures vary in form, where different PIM approaches lead to different tradeoffs. Our goal is to analyze, discuss, and contrast dynamic random-access memory (DRAM)-based PIM architectures for NN performance and energy efficiency. To do so, we analyze three state-of-the-art PIM architectures: 1) UPMEM, which integrates processors and DRAM arrays into a single 2-D chip, 2) Mensa, a 3-D-stacking-based PIM architecture tailored for edge devices, and 3) SIMDRAM, which uses the analog principles of DRAM to execute bit-serial operations. Our analysis reveals that PIM greatly benefits memory-bound NNs: 1) UPMEM provides 23x the performance of a high-end graphics processing unit (GPU) when the GPU requires memory oversubscription for a general matrix-vector multiplication kernel, 2) Mensa improves energy efficiency and throughput by 3.0x and 3.1x over the baseline Edge tensor processing unit for 24 Google edge NN models, and 3) SIMDRAM outperforms a central processing unit/graphics processing unit by 16.7x/1.4x for three binary NNs. We conclude that the ideal PIM architecture for NN models depends on a model's distinct attributes, due to the inherent architectural design choices.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/abstract/document/9869326'}
          ]
        },
        {
          text:'arXiv',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2209.08938.pdf'}
          ]
        }
      ]
    },
    {
      title: 'SIMDRAM: An End-to-End Framework for Bit-Serial SIMD Computing in DRAM',
      venue: 'ASPLOS 2021',
      citation: `N. Hajinazar, <u>G. F. Oliveira</u>, J. D. Ferreira, N. M. Ghiasi, M. Patel, M. Alser, S. Ghose, J. Gómez-Luna, and O. Mutlu,
      <b>"SIMDRAM: An End-to-End Framework for Bit-Serial SIMD Computing in DRAM,"</b>
      in Proceedings of the 26th International Conference on Architectural Support for Programming Languages and Operating Systems (ASPLOS), Virtual, March-April 2021.`,
      keywords: ['bulk bitwise operations', 'processing-in-memory', 'dram', 'memory'],
      awards: [],
      summary:`
      Processing-using-DRAM has been proposed for a limited set of basic operations (i.e., logic operations, addition). However, in order to enable full adoption of processing-using-DRAM, it is necessary to provide support for more complex operations. In this paper, we propose SIMDRAM, a flexible general-purpose processing-usingDRAM framework that (1) enables the efficient implementation of complex operations, and (2) provides a flexible mechanism to support the implementation of arbitrary user-defined operations. We design the hardware and ISA support for SIMDRAM framework to (1) address key system integration challenges, and (2) allow programmers to employ new SIMDRAM operations without hardware changes.
      `,
      sources: [
        {text: 'Full Paper', urls: [{type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/SIMDRAM_asplos21.pdf'}]},
        {text: 'arXiv', urls: [{type: 'file-pdf', url:'https://arxiv.org/pdf/2105.12839.pdf'}]},
      ]
    },
    {
      title: 'DAMOV: A New Methodology and Benchmark Suite for Evaluating Data Movement Bottlenecks',
      venue: 'IEEE Access 2021',
      citation: '<u>G. F. Oliveira</u>, J. Gómez-Luna, L. Orosa, S. Ghose, N. Vijaykumar, I. Fernandez, M. Sadrosadati, and O. Mutlu, <b>"DAMOV: A New Methodology and Benchmark Suite for Evaluating Data Movement Bottlenecks,"</b> IEEE Access, vol. 9, pp. 134457-134502, 2021.',
      keywords: ['benchmarking', 'data movement',  'memory systems', 'dram', 'near-data processing', 'workload characterization'],
      awards: [],
      summary:`
      Our goal is to methodically identify potential sources of data movement over a broad set of applications and to comprehensively compare traditional compute-centric data movement mitigation techniques (e.g., caching and prefetching) to more memory-centric techniques (e.g., NDP), thereby developing a rigorous understanding of the best techniques to mitigate each source of data movement. With this goal in mind, we perform the first large-scale characterization of a wide variety of applications, across a wide range of application domains, to identify fundamental program properties that lead to data movement to/from main memory. We develop the first systematic methodology to classify applications based on the sources contributing to data movement bottlenecks. 
      `,
      sources: [
        {text: 'Full Paper', urls: [{type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_IEEEaccess21.pdf'}]},
        {text: 'arXiv', urls: [{type: 'file-pdf', url:'https://arxiv.org/pdf/2105.03725.pdf'}]},
        {text: 'Short Talk (21 mins)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=HkMYuYMuZOg&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=161'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_arxiv21-talk.pdf'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_arxiv21-talk.pptx'},
        ]},
        {text: 'Long Talk (2 hrs 40 mins)', urls: [
          {type: 'play', url:'https://www.youtube.com/watch?v=GWideVyo0nM&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=156'},
          {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_IEEEaccess21-SAFARI-LiveSeminar-talk'},
          {type: 'file-powerpoint', url:'https://people.inf.ethz.ch/omutlu/pub/DAMOV-Bottleneck-Analysis-and-DataMovement-Benchmarks_IEEEaccess21-SAFARI-LiveSeminar-talk.pptx'},
        ]},
      ]
    },
    {
      title: 'Employing Classification-based Algorithms for General-Purpose Approximate Computing',
      venue: 'DAC 2018',
      citation: '<u>G. F. Oliveira</u>, L. R. Gonçalves, M. Brandalero, A. C. S. Beck, and L. Carro, <b>"Employing Classification-Based Algorithms for General-Purpose Approximate Computing,"</b> in Proceedings of the 55th Annual Design Automation Conference (DAC), San Francisco, CA, USA, 2018.',
      keywords: ['approximate computing', 'classification', 'decision trees'],
      summary:`
      Approximate computing has recently reemerged as a design solution for additional performance and energy improvements at the cost of output quality. In this paper, we propose using a tree-based classification algorithm as an approximation tool for general-purpose applications. We show that, without any hardware support, completely implemented in software, our approach can improve performance by up to 4x (1.95x on average) and reduce EDP by up to 19x (4.04x on average) when compared to precise executions. Besides that, in some cases, our software-based mechanism can even outperform traditional hardware-based Neural Network's state-of-the-art designs.
      `,
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/document/8465822'}
          ]
        }
      ]
    },
    {
      title: 'NIM: An HMC-Based Machine for Neuron Computation',
      venue: 'ARC 2017',
      citation: '<u>G. F. Oliveira</u>, P. C. Santos, M. A. Z. Alves, and L. Carro, <b>"NIM: An HMC-Based Machine for Neuron Computation","</b> in Proceedings of the 13th International Symposium of pplied Reconfigurable Computing (ARC), Delft, The Netherlands, 2017.',
      keywords: ['processing-in-memory', 'near-data processing', 'neuron simulation', 'neural networks'],
      awards: [],
      summary:`
      Neuron Network simulation has arrived as a methodology to help one solve computational problems by mirroring behavior. However, to achieve consistent simulation results, large sets of workloads need to be evaluated. In this work, we present a neural in-memory simulator capable of executing deep learning applications inside 3D-stacked memories. With the reduction of data movement and by including a simple accelerator layer near to memory, our system was able to overperform traditional multi-core devices, while reducing overall system energy consumption.
      `,
      sources:[ 
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://link.springer.com/chapter/10.1007/978-3-319-56258-2_3'}
          ]
        },
      ]
    },
    {
      title: 'A Generic Processing in Memory Cycle Accurate Simulator Under Hybrid Memory Cube Architecture',
      venue: 'SAMOS 2017',
      citation: '<u>G. F. Oliveira</u>, P. C. Santos, M. A. Z. Alves, and L. Carro, <b>"A Generic Processing in Memory Cycle Accurate Simulator Under Hybrid Memory Cube Architecture","</b> in Proceedings of the International Conference on Embedded Computer Systems: Architectures, Modeling, and Simulation (SAMOS), Pythagorion, Greece, 2017.',
      keywords: ['processing-in-memory', 'near-data processing', 'simulator', 'hybrid memory cube', 'systemc'],
      awards: [],
      summary:`
      In this paper, we show the development of a precise, modular and parametrized PIM simulation environment. Our simulator has been developed using the SystemC allowing native parallel simulation. We have implemented the latest HMC technical specifications, including all HMC instructions. The primary contribution of our work lies on developing a user-friendly interface to allow easy PIM architectures exploitation. To evaluate our system, we have implemented a PIM module that can perform vector operations with different operand sizes using the proposed set of tools.
      `,
      sources:[ 
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/document/8344611'}
          ]
        },
      ]
    }
  ],
  talks:[
    {
      title: "Polynesia: Hybrid Transactional/Analytical DBs",
      length: "26 mins",
      venue: "ICDE 2022",
      venuelong: "International Conference on Data Engineering",
      video: '3IHmaDjtWcE',
      ppt: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22-talk.pptx',
      pdf: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22-talk.pdf'
    },
    {
      title: "ISVLSI 2022 Special Session on Processing-in-Memory",
      length: "33 mins",
      venue: "ISVLSI 2022",
      venuelong: "IEEE Computer Society Annual Symposium on VLSI",
      video: 'qeukNs5XI3g',
      ppt: 'https://safari.ethz.ch/safari_public_wp/wp-content/uploads/ISVLSI2022_MensaPolynesia.pptx',
      pdf: 'https://safari.ethz.ch/safari_public_wp/wp-content/uploads/ISVLSI2022_MensaPolynesia.pdf'
    },
    {
      title: "SIMDRAM: An End-to-End Framework for Bit-Serial SIMD Computing in DRAM",
      length: "1 hour 11 mins",
      venue: "P&S PIM, ETH Zurich",
      venuelong: "Bit-Serial SIMD Processing using DRAM, P&S Course at ETH Zurich",
      video: 'pmZoAAhvkRQ',
      ppt: 'https://safari.ethz.ch/projects_and_seminars/spring2022/lib/exe/fetch.php?media=p_s-pim-ss2022-meeting13-aftermeeting.pptx',
      pdf: 'https://safari.ethz.ch/projects_and_seminars/spring2022/lib/exe/fetch.php?media=p_s-pim-ss2022-meeting13-aftermeeting.pdf'
    }
  ],
  services:[
    {
      year: "2023",
      roles: [
        {role: "Reviewer", venues: "IEEE Transactions on Computers"},
        {role: "Subreviewer", venues: "ASPLOS, MICRO, EuroSys"},
      ],
    },
    {
      year: "2022",
      roles: [
        {role: "Reviewer", venues: "IEEE Transactions on Computers"},
        {role: "Subreviewer", venues: "ASPLOS, DSN, ISCA, CAL, TCAD, and USENIX ATC"},
      ],
    },
    {
      year: "2021",
      roles: [
        {role: "Subreviewer", venues: "HPCA, MICRO, TCAD, and USENIX ATC"},
      ]
    },
    {
      year: "2020",
      roles: [
        {role: "Subreviewer", venues: "DSN, ISCA, MICRO, CCS, ISCAS, ISPASS, NVMW, and TCSI"},
      ]
    },
    {
      year: "2019",
      roles: [
        {
          role: "Subreviewer", 
          venues: "DSN, ISCA, MICRO, MSST, TCAD, and TED",
        }
      ]
    },
    {
      year: "2018",
      roles: [
        {
          role: "Subreviewer", 
          venues: "ASPLOS, HPCA, PACT, Nature Electronics, TC, and TVLSI",
        }
      ]
    },
    {
      year: "2017",
      roles: [
        {role: "Subreviewer", venues: "DSN, MICRO, ISCA, and PLDI"},
      ]
    }
  ],
  otherpapers: [
    {
      title: "UPMEM + ML",
      venue: "ISPASS, 2023",
      citation: `J. Gómez-Luna, Y. Guo, S. Brocard, J. Legriel, R. Cimadomo, <u>G. F. Oliveira</u>, G. Singh, and O. Mutlu, 
      <b>"Evaluating Machine Learning Workloads on Memory-Centric Computing Systems,"</b>
      in Proceedings of the 2023 IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS), Raleigh, North Carolina, USA, April 2023.`,
      keywords: ['machine learning', 'processing-in-memory', 'regression', 'classification', 'clustering', 'benchmarking'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/MLonUPMEM-PIM_ispass23.pdf'}                    
          ]
        },
        {
          text:'Full Talk (15 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=60pkaI5AeM4'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/MLonUPMEM-PIM_ispass23-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/MLonUPMEM-PIM_ispass23-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "TransPimLib",
      venue: "ISPASS, 2023",
      citation: `M. Item, J. Gómez Luna, Y. Guo, <u>G. F. Oliveira</u>, M. Sadrosadati, and O. Mutlu, <b>"TransPimLib: Efficient Transcendental Functions for Processing-in-Memory Systems,"</b> in Proceedings of the 2023 IEEE International Symposium on Performance Analysis of Systems and Software (ISPASS), Raleigh, North Carolina, USA, April 2023.`,
      keywords: ['transcendental functions', 'processing-in-memory', 'activation functions', 'machine learning'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/TransPIMLib_ispass23.pdf'}                    
          ]
        },
        {
          text:'Full Talk (17 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=lqqf4eaaEE4'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/TransPIMLib_ispass23-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/MLonUPMEM-PIM_ispass23-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "pLUTo",
      venue: "MICRO, 2022",
      citation: `J. D. Ferreira, G. Falcao, J. Gómez-Luna, M. Alser, L. Orosa, M. Sadrosadati, J. S. Kim, <u>G. F. Oliveira</u>, T. Shahroodi, A. Nori, and O. Mutlu, 
      <b>"pLUTo: Enabling Massively Parallel Computation in DRAM via Lookup Tables,"</b>
      in Proceedings of the 55th International Symposium on Microarchitecture (MICRO), Chicago, IL, USA, October 2022.`,
      keywords: ['processing-in-memory', 'lookup tables', 'dram'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2104.07699.pdf'}                    
          ]
        },
        {
          text:'Lecture Video (26 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=JyWxkeQA0W8&t=2495s'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/pLUTo_micro22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/pLUTo_lecture-slides.pdf'}
          ]
        }
      ]
    },
    {
      title: "Flash-Cosmos",
      venue: "MICRO, 2022",
      citation: `J. Park, R. Azizi, <u>G. F. Oliveira</u>, M. Sadrosadati, R. Nadig, D. Novo, J. Gómez-Luna, M. Kim, and O. Mutlu,
      <b>"Flash-Cosmos: In-Flash Bulk Bitwise Operations Using Inherent Computation Capability of NAND Flash Memory,"</b> 
      in Proceedings of the 55th International Symposium on Microarchitecture (MICRO), Chicago, IL, USA, October 2022.`,
      keywords: ['flash', 'characterization', 'boolean operations', 'processing-in-memory'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://arxiv.org/pdf/2209.05566.pdf'}                    
          ]
        },
        {
          text:'Lecture Video (44 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=ioPERTy7bz4'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/pLUTo_lecture-slides.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/pLUTo_lecture-slides.pdf'}
          ]
        }
      ]
    },
    {
      title: "RowHammer + Wordline Voltage Reduction",
      venue: "DSN 2022",
      citation: `A. G. Yağlıkçı, H. Luo, <u>G. F. Oliveira</u>, A. Olgun, M. Patel, J. Park, H. Hassan, J. S. Kim, L. Orosa, and O. Mutlu,
      <b>"Understanding RowHammer Under Reduced Wordline Voltage: An Experimental Study Using Real DRAM Devices,"</b>
      in Proceedings of the 52nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks (DSN), Baltimore, MD, USA, June 2022.`,
      keywords: ['security', 'rowhammer', 'characterization'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22.pdf'}                    
          ]
        },
        {
          text:'Full Talk (34 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=CJoBROgFbwc'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/RowHammerUnderReducedWordlineVoltage_dsn22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "Polynesia",
      venue: "ICDE, 2022",
      citation: 'A. Boroumand, S. Ghose, <u>G. F. Oliveira</u>, and O. Mutlu, <b>"Polynesia: Enabling High-Performance and Energy-Efficient Hybrid Transactional/Analytical Databases with Hardware/Software Co-Design,"</b> in Proceedings of the 38th International Conference on Data Engineering (ICDE), Virtual, May 2022.',
      keywords: ['processing-in-memory', 'databases', 'transaction', 'analytical', 'dram', 'hardware'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22.pdf'}                    
          ]
        },
        {
          text:'Full Talk (25 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=3IHmaDjtWcE'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Polynesia_icde22-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "HARP",
      venue: "MICRO, 2021",
      citation: 'M. Patel, <u>G. F. Oliveira</u>, and O. Mutlu, <b>"HARP: Practically and Effectively Identifying Uncorrectable Errors in Memory Chips That Use On-Die Error-Correcting Codes,"</b> in Proceedings of the 54th International Symposium on Microarchitecture (MICRO), Virtual, October 2021.',
      keywords: ['on-die ecc', 'dram', 'memory test', 'repair', 'error profiling'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/HARP-memory-error-profiling_micro21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (20 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=w9OlOYKncKM&list=PL5Q2soXY2Zi--0LrXSQ9sST3N0k0bXp51&index=9'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/HARP-memory-error-profiling_micro21-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/HARP-memory-error-profiling_micro21-talk.pdf'}
          ]
        },
      ]
    },
    {
      title: "Mensa",
      venue: "PACT, 2021",
      citation: `A. Boroumand, S. Ghose, B. Akin, R. Narayanaswami, <u>G. F. Oliveira</u>, X. Ma, E. Shiu, and O. Mutlu, <b>"Google Neural Network Models for Edge Devices: Analyzing and Mitigating Machine Learning Inference Bottlenecks,"</b> in Proceedings of the 30th International Conference on Parallel Architectures and Compilation Techniques (PACT), Virtual, September 2021.`,
      keywords: ['machine learning', 'neural networks', 'edge tpu', 'memory', 'dram', 'bottlenecks'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/Google-neural-networks-for-edge-devices-Mensa-Framework_pact21.pdf'}                    
          ]
        },
        {
          text:'Full Talk (14 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=A5gxjDbLRAs&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=178'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/Google-neural-networks-for-edge-devices-Mensa-Framework_pact21-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/Google-neural-networks-for-edge-devices-Mensa-Framework_pact21-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "VBI",
      venue: "ISCA 2020",
      citation: `N. Hajinazar, P. Patel, M. Patel, K. Kanellopoulos, S. Ghose, R. Ausavarungnirun, <u>G. F. Oliveira</u>, J. Appavoo, V. Seshadri, and O. Mutlu, <b>"The Virtual Block Interface: A Flexible Alternative to the Conventional Virtual Memory Framework,"</b> in Proceedings of the 47th International Symposium on Computer Architecture (ISCA), Valencia, Spain, June 2020.`,
      keywords: ['virtual memory', 'reconfigurability', 'memory controller'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/VBI-virtual-block-interface_isca20.pdf'}                    
          ]
        },
        {
          text:'Full Talk (26 mins)',
          urls: [
            {type: 'play', url:'https://www.youtube.com/watch?v=bU2ra65vYRM&list=PL5Q2soXY2Zi8_VVChACnON4sfh2bJ5IrD&index=120'},
            {type: 'file-powerpoint', url: 'https://people.inf.ethz.ch/omutlu/pub/VBI-virtual-block-interface_isca20-talk.pptx'},
            {type: 'file-pdf', url: 'https://people.inf.ethz.ch/omutlu/pub/VBI-virtual-block-interface_isca20-talk.pdf'}
          ]
        }
      ]
    },
    {
      title: "NAPEL",
      venue: "DAC, 2019",
      citation: `G. Singh, J. Gómez-Luna, G. Mariani, <u>G. F. Oliveira</u>, S. Corda, S. Stuijk, and O. Mutlu, H. Corporaal, <b>"NAPEL: Near-Memory Computing Application Performance Prediction via Ensemble Learning,"</b> in Proceedings of the 56th Design Automation Conference (DAC), Las Vegas, NV, USA, June 2019.`,
      keywords: ['processing-in-memory', 'perforance prediction', 'ensemble learning'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://people.inf.ethz.ch/omutlu/pub/NAPEL-near-memory-computing-performance-prediction-via-ML_dac19.pdf'}                    
          ]
        }
      ]
    },
    {
      title: "RVU",
      venue: "DATE, 2017",
      citation: `P. C. Santos, <u>G. F. Oliveira</u>, D. G. Tomé, M. A. Z. Alves, E. C. Almeida and L. Carro, <b>"Operand Size Reconfiguration for Big Data Processing in Memory,"</b> in Proceedings of the 2017 Design, Automation & Test in Europe Conference & Exhibition (DATE), Switzerland, March 2017.`,
      keywords: ['processing-in-memory', 'databases', 'vector processing', 'hybrid memory cube'],
      sources:[
        {
          text:'Full Paper',
          urls: [
            {type: 'file-pdf', url:'https://ieeexplore.ieee.org/document/7927081'}                    
          ]
        }
      ]
    },
  ]
};
