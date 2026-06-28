export type MenuItem = {
  id: string
  name: string
  price: number
  priceLabel: string
  description: string
  image: string
  stars: number
  reviews: number
  category: string
  badge?: string
}

export type MenuSection = {
  id: string
  label: string
}

export const MENU_SECTIONS: MenuSection[] = [
  { id: 'breakfast', label: 'Breakfast'                 },
  { id: 'nihari',    label: 'Nihari & Paye Specialties' },
  { id: 'biryani',   label: 'Biryani & Rice'            },
  { id: 'karahi',    label: 'Karahi Selection'          },
  { id: 'bbq',       label: 'BBQ & Kebabs'              },
  { id: 'breads',    label: 'Fresh Tandoori Breads'     },
  { id: 'drinks',    label: 'Drinks'                    },
  { id: 'desserts',  label: 'Desserts'                  },
]

export const MENU_DATA: MenuItem[] = [

  // ── BREAKFAST ──
  { id: 'breakfast-1', name: 'Halwa Puri', price: 350, priceLabel: 'PKR 350', description: 'Crispy golden puri with sweet halwa and spiced chana.', image: '/halwa.jpg', stars: 5, reviews: 180, category: 'breakfast', badge: 'Popular' },
  { id: 'breakfast-2', name: 'Puri Chanay', price: 320, priceLabel: 'PKR 320', description: 'Spiced white chickpeas served with freshly fried golden puri.', image: '/puri.jpg', stars: 4, reviews: 120, category: 'breakfast' },
  { id: 'breakfast-3', name: 'Nihari Naan', price: 280, priceLabel: 'PKR 280', description: 'Morning nihari served with fresh baked naan.', image: 'https://images.unsplash.com/photo-1708782344071-c5382e27ef3e?w=500&auto=format&fit=crop&q=60', stars: 5, reviews: 95, category: 'breakfast' },
  { id: 'breakfast-4', name: 'Cholay Bhature', price: 300, priceLabel: 'PKR 300', description: 'Fluffy bhature served with rich spiced white chickpeas.', image: '/chole.jpg', stars: 4, reviews: 88, category: 'breakfast' },

  // ── NIHARI & PAYE ──
  { id: 'nihari-1', name: 'Special Beef Nihari', price: 1200, priceLabel: 'PKR 1,200', description: 'Slow-cooked beef shank in a rich, spicy gravy garnished with ginger and green chilies.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKS_9uewEIjFVGPwwn0Zy18v5YEh6SAb69yMGr5fZFihWyObj5MBjoezVX_LuF7KyfY1OU9Cs-7-aEQgXChsSBRDyxU-YjEcL-XGUHj7Erzj51McTXdTSfY9A28HnuvqYx_mm_0Mx2S2PcQEg6liFLatUs_pl9U7dSTaho4-6kCNND13w3P6pehjKgirB4v2B6i7EaZwR-OKVRlOzHJMIyQ6dT84vX_fn8jJoLAqgVxnhkrGoeqM33ixnNmGp5aH-DCSWu8f0kprzT', stars: 5, reviews: 245, category: 'nihari', badge: 'Best Seller' },
  { id: 'nihari-2', name: 'Shahi Mutton Nihari', price: 1800, priceLabel: 'PKR 1,800', description: 'Premium mutton cuts prepared in traditional clay pots for an authentic experience.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbTcsKw0yP7dg-R6rc19MOfOl1YXrsjh1vpl-8cQE_VHBFkOUig1q2sZBwHOwL76S7Gjgub6DY8fYsCHGVLvGVhmxt1ntIhx8FOx_EY6IoHZep2I8oYOL375skGsvXssqwbUf2mfsmKEjlTH-fuGz56-Fgomjy9cHQ9hA1KDyQKnP_yEY27IIwzDTq2PO3pX0q5vU-uJX9DkltEWi8T5g2AgClkfRtFRMTBAIUhpzd6ttiK1_RW0LxAoD1JG83thlMgNs12G_7QGzE', stars: 5, reviews: 132, category: 'nihari' },
  { id: 'nihari-3', name: 'Nalli Nihari', price: 1650, priceLabel: 'PKR 1,650', description: 'Beef Nihari served with extra bone marrow for that rich buttery texture.', image: 'https://images.unsplash.com/photo-1708782340380-536df8cf6784?q=80&w=580&auto=format&fit=crop', stars: 5, reviews: 112, category: 'nihari' },
  { id: 'nihari-4', name: 'Classic Mutton Paye', price: 1100, priceLabel: 'PKR 1,100', description: 'Traditional trotters stew cooked overnight for a sticky, savory depth of flavor.', image: '/paye.jpg', stars: 4, reviews: 88, category: 'nihari' },

  // ── BIRYANI & RICE ──
  { id: 'biryani-1', name: 'Bombay Beef Biryani', price: 850, priceLabel: 'PKR 850', description: 'Long-grain basmati rice layered with spicy beef masala and aromatic herbs.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7usWfaOaTQF2R6a7YMvMcC6LN4e4Qif0aLVgNevbe0ozukxmqwbB3tqdWuU2m_BZWV_8wfdLJk15Q8FRDv10ogjza008reWP_eTcb-9-k0FI2C1-vd5jeYmaPuW6UU6KnO598PCl4PJ0KiAXxkHc_aA6IKePyRKu3eZ3SHjT3JY-_E6qAbhM0dJq_XrDbLfuHIdrKcv9BeMq5Jfw4c80qdR2CaD5rSmf5lK_cpJuWG-_dO9ac3dwlrc_wYAzRX2c_TH0fH_g6JL5', stars: 5, reviews: 160, category: 'biryani', badge: 'Popular' },
  { id: 'biryani-2', name: 'Yakhni Chicken Pulao', price: 750, priceLabel: 'PKR 750', description: 'Subtle and fragrant rice cooked in chicken broth with tender chicken pieces.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDht6q7p3Nsp67eu0ZUI1fjBWeSGm3Sj5mh2CRfwhzXwR8PhR60uSDypF0U-kp6F1g-7Fn6QulADPvBhdn0hyTzQM9SOK0j3gs2-nDQUpT28u8-ua1gR0t7vAmIXZZ3V6kzp2tdTI0i-DgbRJwu8NQXPgOZ2tK4FA3SBPGUz1hYUe2ePT1Adaz4eyKcCtcLpRHKFLzdaBHp5B78BK4n72w0VZP396LM6S0jc6DGzPqnk9q_vP3jt3NvgFeuHCmwJ4FEiqpqVNAEwr9P', stars: 4, reviews: 75, category: 'biryani' },
  { id: 'biryani-3', name: 'Mutton Biryani', price: 950, priceLabel: 'PKR 950', description: 'Royal mutton biryani with saffron-infused basmati rice and whole spices.', image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800', stars: 5, reviews: 200, category: 'biryani' },

  // ── KARAHI ──
  { id: 'karahi-1', name: 'Desi Ghee Mutton Karahi', price: 2400, priceLabel: 'PKR 2,400', description: 'Fresh mutton cooked in a wok with tomatoes, ginger and green chilies in pure desi ghee.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcZsYj5ISFvKeHtvWrotZ3cwhojRU2LQZzBf7RTyfQGRljltT6gE-vK9K4PTxhbOgodq4W1VGhz_eWqwWBw55cH0cponBERbs_yrLAC3gwqpmxwOakKJKkQIsjerT6f8K1IyPCocWRVKiQq6jg5Di3vNwuPWLxoaK8vLKjrxZ_jlZrioOMzbRkBX7f0OOPTdID3sshLV-JsO7F7kKIlVhCOOgARN5wYTICfNhIJtY3m0ODNpXEt_2f-s-_ZVF8MceGTDy7uC_DzAsq', stars: 5, reviews: 190, category: 'karahi', badge: 'Chef Special' },
  { id: 'karahi-2', name: 'Desi Chicken Karahi', price: 1600, priceLabel: 'PKR 1,600', description: 'Half KG chicken cooked in fresh tomatoes, green chillies and ginger on high flame.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcANeLM_UCzC6HczMbrVYxjBY59DWBt24HmXgOa6BThw3LG5Tm829hs7TdqFHBYY00AAy3iCq8ZzvU15gBrkOK_7UpBMXOFthkZbjyfLHhe1ZxhWSF87KMeKhL7rnhwMkjP7Crvef5j7wya3Xb2AwIEcDzRQ8mrjclWCu4SNKo2rGwsivN5tsUKmPCh2f3mgZmJNpaEfKPe2Fh67XhdHOBBBbtbMxB9x8aLNi6X2jbJQxTfGc21up_c0O-4vZivSe2UDeNUbqBsGpW', stars: 5, reviews: 150, category: 'karahi' },

  // ── BBQ ──
  { id: 'bbq-1', name: 'Mutton Seekh Kebab', price: 800, priceLabel: 'PKR 800', description: 'Hand-minced mutton kebabs seasoned with traditional spices and grilled over charcoal.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUhil-PqSAjPEUwL8hpk7RFWAYd6RFUC3U5__hC1LqBskAjYdzOWRx0P_Ni4jakcd13g-zI2l0eO76pTMQDprWQcW3lFcc0_r_RDV29C7yFCpEmrdq7bRYTZvWGKQZmonEWkHC3mD2_LqUrqAGWY7UzrJEIR2Ej_XgcC37oNR9injvPXcEG22dN87-AHF5lh3EzNIQJecCLcNm_Fbxx9QCdmyYnEYcqZyvHwFdmcobQuCT0_eKQ09XEYCRC4XYA9IkK6IW0jq3OyQp', stars: 5, reviews: 165, category: 'bbq' },
  { id: 'bbq-2', name: 'BBQ Mixed Platter', price: 2500, priceLabel: 'PKR 2,500', description: 'A feast featuring kebabs, boti, and malai tikka with specialized dipping sauces.', image: '/platter.avif', stars: 5, reviews: 300, category: 'bbq', badge: 'Family Deal' },
  { id: 'bbq-3', name: 'Chapli Kebab', price: 350, priceLabel: 'PKR 350', description: 'Peshawar-style flat beef kebab with egg and pomegranate seeds.', image: '/chapli.avif', stars: 4, reviews: 98, category: 'bbq' },

  // ── BREADS ──
  { id: 'bread-1', name: 'Roghni Naan', price: 80, priceLabel: 'PKR 80', description: 'Soft leavened bread topped with sesame seeds and brushed with pure desi ghee.', image: 'https://images.unsplash.com/photo-1583057341912-a0df64b8da4d?q=80&w=774&auto=format&fit=crop', stars: 5, reviews: 200, category: 'breads' },
  { id: 'bread-2', name: 'Tandoori Kulcha', price: 60, priceLabel: 'PKR 60', description: 'Traditional thick bread perfect for soaking up rich Nihari gravy.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800', stars: 4, reviews: 150, category: 'breads' },
  { id: 'bread-3', name: 'Plain Naan', price: 40, priceLabel: 'PKR 40', description: 'Classic tandoor-baked plain naan, soft and fluffy.', image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800', stars: 4, reviews: 310, category: 'breads' },

  // ── DRINKS ──
  { id: 'drink-1', name: 'Lassi', price: 120, priceLabel: 'PKR 120', description: 'Thick creamy yogurt drink available sweet or salted.', image: '/lassi.jpg', stars: 5, reviews: 220, category: 'drinks', badge: 'Popular' },
  { id: 'drink-2', name: 'Doodh Pati', price: 80, priceLabel: 'PKR 80', description: 'Strong milk tea brewed Rawalpindi style — bold and aromatic.', image: 'https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=800', stars: 5, reviews: 180, category: 'drinks' },
  { id: 'drink-3', name: 'Rooh Afza', price: 100, priceLabel: 'PKR 100', description: 'Chilled rose sharbat with milk — a refreshing classic.', image: 'https://images.unsplash.com/photo-1560508180-03f285f67ded?w=800', stars: 4, reviews: 95, category: 'drinks' },

  // ── DESSERTS ──
  { id: 'dessert-1', name: 'Kheer', price: 150, priceLabel: 'PKR 150', description: 'Rice pudding with cardamom, rose water and crushed pistachios.', image: '/kher.jpg', stars: 5, reviews: 130, category: 'desserts' },
  { id: 'dessert-2', name: 'Gulab Jamun', price: 120, priceLabel: 'PKR 120', description: 'Soft milk dumplings soaked in rose-flavored sugar syrup.', image: '/jamun.jpg', stars: 5, reviews: 210, category: 'desserts', badge: 'Popular' },
  { id: 'dessert-3', name: 'Seviyan', price: 130, priceLabel: 'PKR 130', description: 'Vermicelli dessert cooked in milk with nuts and cardamom.', image: '/sevi.jpg', stars: 4, reviews: 85, category: 'desserts' },
]