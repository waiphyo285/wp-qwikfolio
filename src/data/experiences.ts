const EXPERIENCES: {
  company: string
  position: string
  portfolio: string
  description: string
  location: string
  workType: 'Full-time' | 'Part-time'
  workMode: 'Onsite' | 'Remote' | 'Hybrid'
  startDate: string
  endDate: string
}[] = [
  {
    company: 'RingZero IT Services',
    position: 'Full Stack Developer',
    portfolio: 'https://www.rznet.com/',
    description:
      'Developed features for the Supplier Portal and POS to enable real-time communication. Integrated Sales Terminal, Store, and Back-office portals for sales operation. Additionally, implemented a loyalty stamp app and a simulation tool to enhance reliable testing.',
    location: 'Bangkok, TH',
    workType: 'Full-time',
    workMode: 'Onsite',
    startDate: 'Jan 2025',
    endDate: 'Now',
  },
  {
    company: 'CloudE8 Pte Ltd',
    position: 'Software Engineer',
    portfolio: 'https://www.cloude8.com/',
    description:
      'Developed the customized ERPNext solutions, implemented WhatsApp chatbots using dialogflow and serverless architecture for business process automation, and integrated third-party services, including payment gateways and delivery platforms for operations.',
    location: 'Singapore',
    workType: 'Full-time',
    workMode: 'Remote',
    startDate: 'Apr 2024',
    endDate: 'Dec 2024',
  },
  {
    company: 'PLUS IMPACT Co.,Ltd',
    position: 'Full Stack Developer',
    portfolio: 'https://plustalent.co/',
    description:
      'Developed a full-stack web application, transforming client requirements into scalable features. Collaborated closely with stakeholders to ensure seamless user-experiences.',
    location: 'Yangon, MM',
    workType: 'Part-time',
    workMode: 'Remote',
    startDate: 'Feb 2024',
    endDate: 'Apr 2024',
  },
  {
    company: 'D3-SG Pte Ltd',
    position: 'Frontend Developer',
    portfolio: 'http://www.d3-sg.com/',
    description:
      'Developed the server-controlled, responsive, and accessible user interfaces for an insurance sales application. Transformed design concepts into interactive, user-friendly experiences with complex server-driven validations from existing window systems.',
    location: 'Singapore',
    workType: 'Full-time',
    workMode: 'Remote',
    startDate: 'Sep 2022',
    endDate: 'Feb 2024',
  },
  {
    company: 'Global New Wave Technology',
    position: 'Sr. Backend Developer',
    portfolio: 'https://www.linkedin.com/company/new-wave-technology/',
    description:
      'Engineered backend development, designing scalable APIs and data workflows to optimize performance. Skilled in Node.js for building reliable, maintainable server-side applications. Mentored teammates and enforced coding standards for code-quality.',
    location: 'Yangon, MM',
    workType: 'Full-time',
    workMode: 'Onsite',
    startDate: 'Dec 2019',
    endDate: 'Aug 2022',
  },
  {
    company: 'Global Connect Asia',
    position: 'Jr. Odoo Developer',
    portfolio: 'https://www.linkedin.com/company/globalconnectasia/',
    description:
      'Developed the customization of Odoo modules to automate workflows and significantly enhance efficiency, while actively collaborating with the team and continuous learning.',
    location: 'Yangon, MM',
    workType: 'Full-time',
    workMode: 'Onsite',
    startDate: 'Aug 2019',
    endDate: 'Nov 2019',
  },
  {
    company: 'Global Connect Asia',
    position: 'Internship Program',
    portfolio: 'https://www.linkedin.com/company/globalconnectasia/',
    description:
      'Gained hands-on experience in ERP systems and web development, actively supporting senior developers in debugging and contributing to the successful real-world projects.',
    location: 'Yangon, MM',
    workType: 'Full-time',
    workMode: 'Onsite',
    startDate: 'May 2019',
    endDate: 'Jul 2019',
  },
]

export default EXPERIENCES
