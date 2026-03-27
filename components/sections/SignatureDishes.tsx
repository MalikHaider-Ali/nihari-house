'use client'
import Image from 'next/image'

const dishes = [
  {
    name: 'Beef Maghaz Nihari',
    price: 'Rs. 1,150',
    stars: '★★★★★',
    reviews: '120+',
    desc: 'Slow-cooked overnight beef shank served with fresh ginger, green chillies, and brain masala.',
    badge: 'Best Seller',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY9ArntPNgXnlUb1A8A7Xh4YS3Dv_ybhAA31WznLadumGNpK25Ik8VGDIhpMZxtNvLRUiTpP8XAP2Ka1IYYHKMKFWYI9EwWETAGvSEl3wdqm_yoY1tuLi9SqI7KZF8NtYOZpRxjcDyUQddk_VIsPbJ7cLYaGVjWt7avjDRP2pAcgR6iiMzx0tAAJRNp6eoPKf6xukTSkqKBgbS0wA2sCYhk307LbLheD9ML-3eH9MkUVl878pXAIqtiXeveDmm9zMiCSszMGEzaOhG',
  },
  {
    name: 'Deghi Mutton Korma',
    price: 'Rs. 1,450',
    stars: '★★★★★',
    reviews: '85+',
    desc: 'Traditional wedding-style mutton korma with a thick, aromatic gravy and local whole spices.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi96i9M6OBHQplnHKr0nK4jqtfRyt9TgAagpMMj_11WpkhvLM6T99vvqbnRoXr_i6waA8mAbDyDGx5KycHdnjoUkanZZ_BSb3Ze7Iv-Fj4FSCp8KHVl1eAyGtk45aKAdqr-X6uGA3-B0Kfqc1zUN-47uGNBvmfnTPDXbtLSKTHpRfkkqTjw-pnkbUXMiRZ8KGNzsNOjWmChtU9_N5IdEwUfAaY84L5b_3jho5n06srQ618g2ljzjr6e3cumPm8zucLDP_qX_4e44Jy',
  },
  {
    name: 'Yakhni Chicken Pulao',
    price: 'Rs. 750',
    stars: '★★★★☆',
    reviews: '210+',
    desc: 'Fragrant long-grain basmati rice cooked in rich chicken stock and aromatic herbs.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDm8XpRpkRayCz3JZDD61CpJYmX6mzKbozUO9WZ3cLD5bRbil2Qq0WUI45KztguRvMUVn-hArddmI1pcm8V9YirNlVKxA7AQ5knpylNIqDFIWJErqkhww0dPboDYj_IP8yzwqsa6bQzVS0QWtyNviEcbKvXYYJPkXOPBYbyY7I_lh-S4ARVNQVjp8OfSQYKSiKFtnTkdjici5v-wCwOKwi-075yJ-e7hpd-iQ9ymKy5cLv1gKZT5hVd8x2cWzoTNhVcgkSCVGCQRAj6',
  },
  {
    name: 'Desi Chicken Karahi',
    price: 'Rs. 1,600',
    stars: '★★★★★',
    reviews: '150+',
    desc: 'Half KG chicken cooked in fresh tomatoes, green chillies, and ginger on high flame.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcANeLM_UCzC6HczMbrVYxjBY59DWBt24HmXgOa6BThw3LG5Tm829hs7TdqFHBYY00AAy3iCq8ZzvU15gBrkOK_7UpBMXOFthkZbjyfLHhe1ZxhWSF87KMeKhL7rnhwMkjP7Crvef5j7wya3Xb2AwIEcDzRQ8mrjclWCu4SNKo2rGwsivN5tsUKmPCh2f3mgZmJNpaEfKPe2Fh67XhdHOBBBbtbMxB9x8aLNi6X2jbJQxTfGc21up_c0O-4vZivSe2UDeNUbqBsGpW',
  },
  {
    name: 'Mutton Seekh Kebab',
    price: 'Rs. 800',
    stars: '★★★★★',
    reviews: '65+',
    desc: 'Hand-minced mutton kebabs seasoned with traditional spices and grilled over charcoal.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUhil-PqSAjPEUwL8hpk7RFWAYd6RFUC3U5__hC1LqBskAjYdzOWRx0P_Ni4jakcd13g-zI2l0eO76pTMQDprWQcW3lFcc0_r_RDV29C7yFCpEmrdq7bRYTZvWGKQZmonEWkHC3mD2_LqUrqAGWY7UzrJEIR2Ej_XgcC37oNR9injvPXcEG22dN87-AHF5lh3EzNIQJecCLcNm_Fbxx9QCdmyYnEYcqZyvHwFdmcobQuCT0_eKQ09XEYCRC4XYA9IkK6IW0jq3OyQp',
  },
  {
    name: 'BBQ Mixed Platter',
    price: 'Rs. 2,500',
    stars: '★★★★★',
    reviews: '300+',
    desc: 'A feast for the family featuring kebabs, boti, and malai tikka with specialized dips.',
    badge: '',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZ18jtWhQVdO5sU9JEXsxtKjjfCrwV5GiHDfIakYKvNxz28N75ttbNUyklfxR71AQPNpAqr5MUInZPJQODX4mvDla4dhvUg0leiahluz-0gVYXM3dCmcV8TcPG-DossZHHl9kMgtyAwaiXaGsrZ4DADC4ghX3VaKKhFoakkReOPg6tlY27NAlO3bugOiUjmTLOdeWvXUBSbYzqx2hyEQLT9eWt7CVY7rskX_EoKF3TepcQyCe381LmPIwlNCgmCVBAJdTDlKKEDy_M',
  },
]

export default function SignatureDishes() {
  return (
    <section className="pt-48 pb-24 bg-[#FDF6EC]" id="menu">
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl text-[#6B1E2E] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Signature Dishes
          </h2>
          <div className="w-24 h-1 bg-[#D4870A] mx-auto mb-6" />
          <p
            className="max-w-2xl mx-auto text-gray-600"
            style={{ fontFamily: 'Lora, serif' }}
          >
            Handcrafted with precision, our menu celebrates the rich
            culinary heritage of Rawalpindi.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Image */}
              <div className="h-64 overflow-hidden relative">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.badge && (
                  <div
                    className="absolute top-4 right-4 bg-[#6B1E2E] text-white px-3 py-1 rounded-full text-xs font-bold"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {dish.badge}
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3
                    className="text-2xl text-[#1C1C1C]"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {dish.name}
                  </h3>
                  <span
                    className="text-[#D4870A] font-bold"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {dish.price}
                  </span>
                </div>
                <div className="flex text-yellow-500 mb-4">
                  <span>{dish.stars}</span>
                  <span
                    className="text-gray-400 text-xs ml-2 pt-1"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    ({dish.reviews} Reviews)
                  </span>
                </div>
                <p
                  className="text-gray-600 text-sm mb-6 leading-relaxed italic"
                  style={{ fontFamily: 'Lora, serif' }}
                >
                  {dish.desc}
                </p>
                <button
                  className="w-full py-3 border-2 border-[#6B1E2E] text-[#6B1E2E] font-bold rounded-xl hover:bg-[#6B1E2E] hover:text-white transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  + Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}