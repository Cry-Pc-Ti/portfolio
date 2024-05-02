import { languageData } from './languageData'

export const skillsData = [
  {
    label: 'JavaScript',
    icon: languageData.find((l) => l.name === 'JavaScript')?.icon ?? '',
    rating: 4,
    comment: '前職のプロジェクトや個人開発で使用',
  },
  {
    label: 'Java',
    icon: languageData.find((l) => l.name === 'Java')?.icon ?? '',
    rating: 2,
    comment: '短期間のプロジェクトであるが実務経験あり\n職業訓練校にて学習',
  },
  {
    label: 'TypeScript',
    icon: languageData.find((l) => l.name === 'TypeScript')?.icon ?? '',
    rating: 3,
    comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
  },
  {
    label: 'Python',
    icon: languageData.find((l) => l.name === 'Python')?.icon ?? '',
    rating: 3,
    comment: '職業訓練校にて学習',
  },
  {
    label: 'React',
    icon: languageData.find((l) => l.name === 'React')?.icon ?? '',
    rating: 2,
    comment: '本ポートフォリオサイトの作成にて学習・使用',
  },
  {
    label: 'Node.js',
    icon: languageData.find((l) => l.name === 'Node.js')?.icon ?? '',
    rating: 3,
    comment: '独学で習得し、個人開発で使用\n基本的なことは理解しているが、実務経験はなし',
  },
  {
    label: 'AWS',
    icon: languageData.find((l) => l.name === 'AWS')?.icon ?? '',
    rating: 1,
    comment: '独学で習得し、個人開発にてLightSailを使用',
  },
  {
    label: 'GitHub',
    icon: languageData.find((l) => l.name === 'GitHub')?.icon ?? '',
    rating: 2,
    comment: '個人開発で使用',
  },
]
