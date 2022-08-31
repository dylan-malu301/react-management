import {
  HomeOutlined,
  BarsOutlined,
  ProjectOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'
const NormalIcon = () => {
  return (
    <div></div>
  )
}
export const baseRouters = [
  {
    path: "/",
    key: "index",
    to: "/Home",
  },
  {
    path: '/Home',
    name: 'home',
    keepAlive: true,
    title: '首页',
    routerId: 1,
    Icon: HomeOutlined,
  },
  {
    title: '基础组件',
    Icon: BarsOutlined,
    path: '/General',
    children: [
      {
        title: 'button组件',
        Icon: NormalIcon,
        path: '/General/Button',
        keepAlive: false,
        routerId: 2
      },
      {
        title: 'icon组件',
        Icon: NormalIcon,
        path: '/General/Icon',
        keepAlive: false,
        routerId: 3
      }
    ]
  },
  {
    title: '结果页',
    Icon: ProjectOutlined,
    path: '/Result',
    children: [
      {
        title: '404',
        Icon: NormalIcon,
        path: '/Result/404',
        keepAlive: false,
        routerId: 4
      }
    ]
  },
  {
    path: '/Clock',
    name: 'clock',
    keepAlive: true,
    title: 'css绘制时钟',
    routerId: 5,
    Icon: ClockCircleOutlined,
  }
]