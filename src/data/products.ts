import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Jabón de Lavanda',
    price: 12000,
    category: 'Aromaterapia',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Jabón artesanal con aceite esencial de lavanda. Perfecto para relajarse después de un día largo. Propiedades calmantes y aromáticas.',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '2',
    name: 'Jabón de Miel y Avena',
    price: 14000,
    category: 'Piel sensible',
    image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Ideal para pieles sensibles. La miel hidrata profundamente mientras la avena exfolia suavemente.',
    images: [
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4465849/pexels-photo-4465849.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '3',
    name: 'Jabón de Coco',
    price: 13000,
    category: 'Hidratación',
    image: 'https://images.pexels.com/photos/4465851/pexels-photo-4465851.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Rico en aceite de coco virgen. Proporciona hidratación profunda y aroma tropical refrescante.',
    images: [
      'https://images.pexels.com/photos/4465851/pexels-photo-4465851.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '4',
    name: 'Jabón de Carbón Activado',
    price: 15000,
    category: 'Purificación',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfecto para pieles grasas y con impurezas. El carbón activado elimina toxinas y purifica profundamente.',
    images: [
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '5',
    name: 'Jabón de Rosas',
    price: 16000,
    category: 'Aromaterapia',
    image: 'https://images.pexels.com/photos/4465849/pexels-photo-4465849.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Elaborado con pétalos de rosas reales. Aroma delicado y propiedades antienvejecimiento.',
    images: [
      'https://images.pexels.com/photos/4465849/pexels-photo-4465849.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4465851/pexels-photo-4465851.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  },
  {
    id: '6',
    name: 'Jabón de Aloe Vera',
    price: 13500,
    category: 'Piel sensible',
    image: 'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Con gel puro de aloe vera. Perfecto para pieles irritadas, quemaduras leves y cicatrización.',
    images: [
      'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=500',
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500'
    ]
  }
];

export const categories = [
  'Todos',
  'Aromaterapia',
  'Piel sensible',
  'Hidratación',
  'Purificación'
];