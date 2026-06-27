export type GalleryItem = {
  id: number
  src: string
  alt: string
  title: string
  desc: string
  category: 'food' | 'restaurant' | 'events'
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtkSJpcQu5-W0iw0eVjCtWn-Xoae4wQ0AM-980U4nEHDAE719t5LsZjEXYyilBKV0MnoV89Zb0MKS4YIktxhspI3FFIjOPL92N5duKtNXHBrpeYYnFAFlraE6V09by1A7xTQQ4jneZdvLlj828dUxauu2s2acHns1NExvHKcxcjPsKVCKBQH_E-hOW85RX2xhroJ_0zdkRq_aqGS2ZHZLOzLZLcJfFFJI5ED6N4_EKaQ-hGGBveCMwk8WcuKDrc5XBNqY6lmW7gbA3',
    alt: 'Slow cooked beef Nihari',
    title: 'Signature Beef Nihari',
    desc: 'Slow-cooked for 12 hours',
    category: 'food',
  },
  {
    id: 2,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCF8pmxZEmnIUxLuBoJlhqgTGopZaD59OBFi_28Ds4TzaXaZFtYMBn3I8q0IfIBRwzgJBLUvE3LmsBr2pdt21a3G2P0z6hfjGI7uuyMeBGNva5m0S0wpoPF6A9e2gdX017RriBxTNgpZtxTsuoA5wkHwSxq8GGRWI1V4YZChLY5rINhjFW7TtyFFdBwSimW4min9Ybv0P1JR99Sj6OCCGLs3qSJvEKTvQXADLUhkWIOyqBxeEqc55eBKLMirnCzGeS9FHhSQ-RUb57M',
    alt: 'Royal Mutton Biryani',
    title: 'Royal Mutton Biryani',
    desc: 'Aromatic basmati & spice',
    category: 'food',
  },
  {
    id: 3,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvCqcRCxYBzRIPT6EKRkZ61ngy0TNkhe1Ino3h5b6x8ZAY5DQMC_Igi80F12Ukub0AcAAj0hHv_BtcI69nN_r1ECutyxjqSzvlfxnWPYx1-Q-AWCVkRMMbczy2mS0kp3QEhSf6797w8BJ6G5b5qvyZyBA2F-eL79JnUs3Jylmob0M-1wpQyLM7MkONtSxsw-y4NwbgZQ9BaaouXjWErWVtUPiMJ8oaiZKwUOu-lky68GCqD4_NEfW4dkEnDa8--GH7fhMMnsEJq5pV',
    alt: 'Restaurant interior',
    title: 'Main Dining Room',
    desc: 'Elegant heritage ambiance',
    category: 'restaurant',
  },
  {
    id: 4,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUJ4936dLXqhF0Li0m_QRNKtoBo9pJ0l_eHeEV-qXXdWSwY0eYW2DfoMhDWVxAlaEZ9lwHDOrBjB4dPBv3pL7TvNjQW4BsOeQi4Rii66P_g52h_bcostoLn91K1iTcaKrHeVT7e-KsrrXYGWm0vDnIveXNHdqrFeHEA6HIz23iK-w2oBnz7cUbkaILs1aae7GCSbKhZG-ni67OrdgNpUDfuJOBtehWHa7LOkgqTjvxxH1BgZmjeKAASze_7r-CCJBtlsbwcMot3BKt',
    alt: 'Fresh naan bread',
    title: 'Fresh Tandoori Naan',
    desc: 'Hand-stretched & clay-baked',
    category: 'food',
  },
  {
    id: 5,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC2Gpv__mJhP1uHzwPoS6LruhcSfhwpIbVAlIbNbCfnQjDTr7Hk1tnHTtsqHHgtA5XQ61JQAE1DcDz4i0iV98k9Fq4a5gqy0h030U_e6JwYIa26dpp8IBFRm3TDcTjFoIgtUctHzzcQG0A1btlfn_5Ap-KkXx0ZGIqJjRGmDf2-IHD7v0mA6Kr0IabwQGSFDWgooWYzcwtw8lrDk8ZZ8Fq8Pts331f4PnJ3Lpn7tEFso3rQadcLfCmfQX88fwixRGzp4ufZt5VIpza',
    alt: 'Catering event',
    title: 'Private Celebrations',
    desc: 'Memorable events at Nihari House',
    category: 'events',
  },
  {
    id: 6,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC5Hs_H5Wm9ZnNo6Vk3vVx35Jyll4V3iwK5U3QysvyAnJj0CD62qTDyAx3sWea4CFhUCQRU1xeVNNhG8f3FObvCoF_z6ixIthYD_zr4f5OcrIYS2yuQSjj84dc-h5t9_VN0bu44mwd5w1DMH1Li1DYei_9AG4DmCyfUwKjYG1BJxroi5XuDq3_gW-jqz6Pwha_M2lShAuk4gAF7eK2d4_ugI7-qWGFmFtvel2aKnzEyZQ9joACinq1Ax2IlnCC5dsYq6tkZYL0Enl7h',
    alt: 'Peshawari Karahi',
    title: 'Peshawari Karahi',
    desc: 'Sizzling iron-wok tradition',
    category: 'food',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800',
    alt: 'Pakistani food spread',
    title: 'Heritage Food Spread',
    desc: 'A feast for the senses',
    category: 'food',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800',
    alt: 'Biryani close up',
    title: 'Dum Biryani',
    desc: 'Sealed and slow cooked',
    category: 'food',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1585937421612-70a0f2455f75?w=800',
    alt: 'Restaurant ambiance',
    title: 'Evening Ambiance',
    desc: 'Where memories are made',
    category: 'restaurant',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800',
    alt: 'Wedding catering',
    title: 'Wedding Catering',
    desc: 'Making your day special',
    category: 'events',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800',
    alt: 'Seekh kebab',
    title: 'Seekh Kebab',
    desc: 'Charcoal grilled perfection',
    category: 'food',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800',
    alt: 'Desi breakfast',
    title: 'Desi Breakfast',
    desc: 'Start your day right',
    category: 'food',
  },
]