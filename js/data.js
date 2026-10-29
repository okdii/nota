/*
 * Data etnik, perayaan dan statistik untuk aplikasi Jalinan.
 * Semua kandungan ditulis untuk tujuan pendidikan. Sahkan semula fakta
 * dengan sumber rasmi (JAKOA, Jabatan Perangkaan Malaysia, muzium negeri)
 * sebelum digunakan dalam kerja akademik.
 *
 * Medan etnik:
 *   wilayah  semenanjung | sabah | sarawak
 *   warna    [warna dasar, warna corak, warna corak kedua (pilihan)]
 *   corak    songket | zigzag | kotak | titik | ombak | manik | jalur
 *   ikon     ciri yang hanya milik etnik ini, ditulis seperti di tengah ayat (untuk kuiz)
 *   serumpun etnik berkait rapat yang tidak dijadikan pilihan salah dalam kuiz
 */

window.ETNIK = [
  {
    id: 'melayu',
    nama: 'Melayu',
    alias: 'Orang Melayu',
    wilayah: ['semenanjung', 'sabah', 'sarawak'],
    lokasi: 'Seluruh Malaysia, terutamanya di Semenanjung',
    ringkasan: 'Kumpulan etnik terbesar di Malaysia. Bahasa Melayu ialah bahasa kebangsaan, dan adat Melayu banyak membentuk budaya nasional.',
    bahasa: 'Bahasa Melayu, dengan loghat negeri seperti Kelantan, Terengganu, Kedah, Negeri Sembilan dan Sarawak',
    agama: 'Islam',
    pakaian: 'Lelaki memakai baju Melayu bersampin dan bersongkok. Wanita memakai baju kurung atau baju kebaya. Kain songket yang ditenun dengan benang emas dipakai untuk majlis rasmi dan perkahwinan.',
    makanan: ['Nasi lemak', 'Rendang', 'Ketupat dan lemang', 'Nasi kerabu', 'Laksa'],
    seni: ['Silat', 'Wau', 'Dikir barat', 'Zapin', 'Wayang kulit', 'Congkak'],
    rumah: 'Rumah tradisional bertiang seperti Rumah Limas, Rumah Kutai di Perak dan Rumah Minangkabau di Negeri Sembilan.',
    salam: { frasa: 'Apa khabar?', maksud: 'Bagaimana keadaan anda?', kuiz: false },
    fakta: [
      'Adat Perpatih diamalkan di Negeri Sembilan, manakala kebanyakan negeri lain mengamalkan Adat Temenggung.',
      'Logo Malaysia Airlines diilhamkan daripada wau bulan dari Kelantan.'
    ],
    ikon: ['wau bulan', 'dikir barat', 'baju Melayu bersampin'],
    warna: ['#6E1B3A', '#D4A13A'],
    corak: 'songket'
  },
  {
    id: 'cina',
    nama: 'Cina',
    alias: 'Masyarakat Cina Malaysia',
    wilayah: ['semenanjung', 'sabah', 'sarawak'],
    lokasi: 'Bandar besar di seluruh Malaysia, ramai di Pulau Pinang, Selangor, Kuala Lumpur, Johor, Perak dan Kuching',
    ringkasan: 'Kumpulan etnik kedua terbesar. Kebanyakan nenek moyang mereka berhijrah dari selatan China pada abad ke-19 dan awal abad ke-20.',
    bahasa: 'Mandarin, serta dialek Hokkien, Kantonis, Hakka, Teochew, Hainan dan Foochow',
    agama: 'Buddha, Tao, ajaran Konfusius dan Kristian',
    pakaian: 'Wanita memakai cheongsam (qipao) dan lelaki atau wanita memakai samfu, iaitu baju dan seluar sepasang. Warna merah dipakai ketika perayaan kerana melambangkan tuah.',
    makanan: ['Yee sang', 'Char kuey teow', 'Bak kut teh', 'Nasi ayam Hainan', 'Kuih bulan'],
    seni: ['Tarian singa dan naga', '24 Gendang Perayaan', 'Kaligrafi Cina', 'Opera Cina'],
    rumah: 'Rumah kedai dua tingkat dengan kaki lima di hadapan, banyak terdapat di George Town dan Melaka.',
    salam: { frasa: 'Nǐ hǎo (你好)', maksud: 'Helo, dalam bahasa Mandarin' },
    fakta: [
      'Persembahan 24 Gendang Perayaan dicipta di Johor Bahru pada tahun 1988.',
      'Lou sang, iaitu menggaul yee sang beramai-ramai sambil menyebut ucapan tuah, popular di Malaysia dan Singapura.'
    ],
    serumpun: ['baba-nyonya'],
    ikon: ['24 Gendang Perayaan', 'yee sang', 'cheongsam'],
    warna: ['#A8231B', '#F2C14E'],
    corak: 'kotak'
  },
  {
    id: 'india',
    nama: 'India',
    alias: 'Masyarakat India Malaysia',
    wilayah: ['semenanjung'],
    lokasi: 'Kebanyakannya di Semenanjung, terutamanya Selangor, Perak, Kuala Lumpur, Negeri Sembilan dan Pulau Pinang',
    ringkasan: 'Kumpulan etnik ketiga terbesar. Majoriti berketurunan Tamil dari selatan India, ramai datang untuk bekerja di ladang getah pada zaman British.',
    bahasa: 'Tamil, serta Telugu, Malayalam dan Punjabi',
    agama: 'Hindu, serta Sikh, Kristian dan Islam',
    pakaian: 'Wanita memakai sari atau punjabi suit, dan pottu di dahi. Lelaki memakai vesti (dhoti) dan kurta.',
    makanan: ['Thosai', 'Nasi daun pisang', 'Murukku', 'Biryani', 'Payasam'],
    seni: ['Tarian Bharatanatyam', 'Kolam', 'Muzik Carnatic', 'Kalungan bunga malai'],
    rumah: 'Kuil Hindu dengan gopuram, iaitu menara pintu bertingkat yang dihiasi patung dewa-dewi berwarna.',
    salam: { frasa: 'Vanakkam (வணக்கம்)', maksud: 'Salam hormat, dalam bahasa Tamil' },
    fakta: [
      'Patung Dewa Murugan di Batu Caves setinggi 42.7 meter, antara yang tertinggi di dunia.',
      'Kolam dilukis dengan tepung beras berwarna di hadapan rumah ketika Deepavali untuk menyambut tetamu.'
    ],
    ikon: ['kolam tepung beras', 'tarian Bharatanatyam', 'kavadi ketika Thaipusam'],
    warna: ['#C76A00', '#7A1F45', '#F6D365'],
    corak: 'titik'
  },
  {
    id: 'iban',
    nama: 'Iban',
    alias: 'Dayak Laut',
    wilayah: ['sarawak'],
    lokasi: 'Seluruh Sarawak, terutamanya Sri Aman, Betong, Sibu dan Kapit',
    ringkasan: 'Kumpulan etnik terbesar di Sarawak, kira-kira 30% penduduk negeri itu. Terkenal dengan rumah panjai dan tenunan pua kumbu.',
    bahasa: 'Bahasa Iban',
    agama: 'Kebanyakannya Kristian, ada yang masih mengamalkan kepercayaan tradisi',
    pakaian: 'Wanita memakai kain kebat, marik empang (kalung manik) dan sugu tinggi, iaitu mahkota perak. Lelaki memakai sirat dan lelanjang, topi berhias bulu burung.',
    makanan: ['Manok pansuh (ayam dimasak dalam buluh)', 'Tuak', 'Kasam ikan', 'Sayur midin', 'Terung Dayak'],
    seni: ['Tarian ngajat', 'Tenunan pua kumbu', 'Tatu tradisi', 'Muzik gong dan engkerumong'],
    rumah: 'Rumah panjai (rumah panjang) menempatkan banyak keluarga di bawah satu bumbung. Setiap keluarga ada bilik sendiri, dan ruai ialah serambi bersama.',
    salam: { frasa: 'Nama berita nuan?', maksud: 'Apa khabar anda?' },
    fakta: [
      'Pua kumbu ditenun oleh wanita, dan motifnya dahulu dipercayai membawa kuasa rohani.',
      'Burung kenyalang dianggap mulia oleh masyarakat Iban dan menjadi simbol negeri Sarawak.'
    ],
    ikon: ['tenunan pua kumbu', 'tarian ngajat', 'sugu tinggi (mahkota perak)'],
    warna: ['#7E2A17', '#1E1612', '#E9D8B4'],
    corak: 'zigzag'
  },
  {
    id: 'bidayuh',
    nama: 'Bidayuh',
    alias: 'Dayak Darat',
    wilayah: ['sarawak'],
    lokasi: 'Bahagian Kuching dan Serian, termasuk Bau, Lundu dan Padawan',
    ringkasan: 'Kumpulan Dayak kedua terbesar di Sarawak. Kebanyakannya tinggal di kawasan berbukit di barat daya negeri itu, berhampiran sempadan Kalimantan.',
    bahasa: 'Beberapa dialek Bidayuh seperti Bukar-Sadong, Biatah dan Jagoi',
    agama: 'Kebanyakannya Kristian, ada yang mengamalkan kepercayaan tradisi',
    pakaian: 'Pakaian tradisi berwarna hitam dengan hiasan manik dan sulaman berwarna terang.',
    makanan: ['Ayam pansuh', 'Nasi pansuh (dimasak dalam buluh)', 'Tuak', 'Sayur midin'],
    seni: ['Anyaman buluh dan rotan', 'Muzik gong', 'Titi buluh tradisi'],
    rumah: 'Baruk, iaitu rumah bulat bertiang tinggi. Dahulu ia menjadi tempat lelaki berkumpul dan menyimpan tengkorak hasil pemburuan kepala.',
    fakta: [
      'Kampung Annah Rais di Padawan terkenal dengan rumah panjang Bidayuh dan kolam air panasnya.',
      'Dialek Bidayuh berbeza mengikut kawasan, sehingga penutur dialek berlainan kadang-kadang sukar memahami satu sama lain.'
    ],
    ikon: ['baruk (rumah bulat)', 'rumah panjang Annah Rais'],
    warna: ['#1E1A1A', '#C8372D', '#F2C230'],
    corak: 'manik'
  },
  {
    id: 'melanau',
    nama: 'Melanau',
    alias: 'Masyarakat pesisir Sarawak',
    wilayah: ['sarawak'],
    lokasi: 'Pesisir tengah Sarawak: Mukah, Dalat, Oya, Matu dan Daro',
    ringkasan: 'Masyarakat pesisir dan sungai yang mengusahakan sagu sejak turun-temurun.',
    bahasa: 'Bahasa Melanau dengan beberapa dialek',
    agama: 'Kebanyakannya Islam, ada juga yang Kristian dan mengamalkan kepercayaan tradisi',
    makanan: ['Umai (ikan mentah dengan limau)', 'Linut (kanji sagu)', 'Tebaloi (biskut sagu)', 'Sagu'],
    seni: ['Buaian tibow ketika Pesta Kaul', 'Terendak, topi lebar anyaman', 'Ukiran kayu'],
    rumah: 'Rumah Tinggi, rumah panjang bertiang sangat tinggi yang dahulu melindungi penghuni daripada serangan musuh dan lanun.',
    fakta: [
      'Mukah dikenali sebagai pusat pengeluaran sagu di Sarawak.',
      'Tebaloi ialah biskut rangup daripada tepung sagu, kelapa parut dan telur.'
    ],
    ikon: ['tebaloi', 'Pesta Kaul', 'terendak (topi lebar)'],
    warna: ['#2F3B2C', '#C9A227', '#8FA36B'],
    corak: 'jalur'
  },
  {
    id: 'orang-ulu',
    nama: 'Orang Ulu',
    alias: 'Kayan, Kenyah, Kelabit, Lun Bawang, Penan',
    wilayah: ['sarawak'],
    lokasi: 'Pedalaman Sarawak di hulu Sungai Rajang dan Baram, serta Tanah Tinggi Kelabit',
    ringkasan: 'Gelaran bagi beberapa etnik pedalaman Sarawak, antaranya Kayan, Kenyah, Kelabit, Lun Bawang dan Penan.',
    bahasa: 'Bahasa Kayan, Kenyah, Kelabit, Lun Bawang, Penan dan lain-lain',
    agama: 'Kebanyakannya Kristian',
    pakaian: 'Pakaian dan topi berhias manik dengan motif pilin. Dahulu ramai memakai subang berat yang memanjangkan cuping telinga.',
    makanan: ['Beras Bario', 'Nuba laya (nasi lembik dibalut daun)', 'Garam Bario'],
    seni: ['Sape (alat muzik bertali)', 'Kraf manik', 'Mural dan ukiran rumah panjang', 'Tarian datun julud'],
    rumah: 'Rumah panjang dengan dinding berukir motif pokok hayat dan burung kenyalang.',
    fakta: [
      'Sape asalnya alat muzik untuk upacara, kini dimainkan di pentas antarabangsa.',
      'Beras Bario dari Tanah Tinggi Kelabit terkenal kerana bijinya halus dan wangi.'
    ],
    ikon: ['sape', 'beras Bario', 'tarian datun julud'],
    warna: ['#0F3D3E', '#E8B04B', '#D2452E'],
    corak: 'manik'
  },
  {
    id: 'kadazandusun',
    nama: 'Kadazan-Dusun',
    alias: 'Kadazan dan Dusun',
    wilayah: ['sabah'],
    lokasi: 'Pantai barat dan pedalaman Sabah: Penampang, Papar, Tambunan, Ranau dan Kota Belud',
    ringkasan: 'Kumpulan etnik terbesar di Sabah, terdiri daripada puluhan subetnik. Kehidupan mereka sejak dahulu berkait rapat dengan penanaman padi.',
    bahasa: 'Bahasa Kadazan dan Dusun dengan pelbagai dialek',
    agama: 'Kebanyakannya Kristian, ada juga yang beragama Islam',
    pakaian: 'Pakaian hitam berhias renda dan butang emas. Wanita Penampang memakai siung (topi anyaman) dan himpogot, tali pinggang syiling perak. Lelaki memakai sigah, iaitu destar tenunan.',
    makanan: ['Hinava (ikan mentah dengan limau dan biji bambangan)', 'Noonsom (ikan diperam)', 'Tuhau', 'Lihing (wain beras)'],
    seni: ['Tarian Sumazau', 'Unduk Ngadau', 'Sompoton (alat tiup labu)', 'Muzik gong'],
    salam: { frasa: 'Kopivosian', maksud: 'Salam sejahtera, dalam bahasa Kadazan' },
    fakta: [
      'Gunung Kinabalu (Aki Nabalu) dipercayai tempat bersemadi roh nenek moyang.',
      'Unduk Ngadau memperingati Huminodun, gadis dalam legenda yang mengorbankan diri supaya padi tumbuh dan rakyat tidak kebuluran.'
    ],
    ikon: ['tarian Sumazau', 'Unduk Ngadau', 'hinava'],
    warna: ['#151515', '#C9A43A', '#8A2222'],
    corak: 'jalur'
  },
  {
    id: 'bajau',
    nama: 'Bajau',
    alias: 'Sama-Bajau',
    wilayah: ['sabah'],
    lokasi: 'Pantai barat Sabah (Kota Belud, Tuaran) dan pantai timur (Semporna, Lahad Datu)',
    ringkasan: 'Kumpulan etnik kedua terbesar di Sabah. Bajau Pantai Barat terkenal sebagai penunggang kuda, manakala Bajau Pantai Timur rapat dengan kehidupan laut.',
    bahasa: 'Bahasa Bajau (Sama) dengan beberapa dialek',
    agama: 'Islam',
    pakaian: 'Pakaian berwarna terang dengan sulaman emas. Penunggang kuda Kota Belud memakai destar dan pakaian lengkap, dan kuda mereka turut dihias.',
    makanan: ['Putu (ubi kayu kukus)', 'Latok (anggur laut)', 'Pinjaram', 'Ikan bakar'],
    seni: ['Tarian igal-igal', 'Perahu lepa', 'Kuda berhias', 'Tamu Kota Belud'],
    rumah: 'Rumah di atas air. Sesetengah Bajau Laut dahulu tinggal di atas perahu lepa sepanjang tahun.',
    fakta: [
      'Bajau Kota Belud digelar "Koboi Timur" kerana kemahiran menunggang kuda.',
      'Kemahiran menyelam masyarakat Bajau Laut yang luar biasa turut dikaji oleh saintis.'
    ],
    ikon: ['Regatta Lepa', 'penunggang kuda Kota Belud', 'tarian igal-igal'],
    warna: ['#0B4F6C', '#F4D35E', '#EE6C4D'],
    corak: 'ombak'
  },
  {
    id: 'murut',
    nama: 'Murut',
    alias: 'Orang bukit',
    wilayah: ['sabah'],
    lokasi: 'Pedalaman selatan Sabah: Keningau, Tenom, Nabawan dan Sipitang',
    ringkasan: 'Masyarakat pedalaman Sabah yang dahulu tinggal di rumah panjang di tepi sungai dan terkenal sebagai pemburu.',
    bahasa: 'Bahasa Murut dengan subkumpulan seperti Tagal, Timugon dan Paluan',
    agama: 'Kebanyakannya Kristian',
    pakaian: 'Dahulu pakaian dibuat daripada kulit kayu. Kini pakaian tradisi dihiasi manik berwarna-warni.',
    makanan: ['Jaruk (daging atau ikan diperam dalam buluh)', 'Tapai', 'Ubi kayu'],
    seni: ['Tarian magunatip', 'Lansaran (lantai melantun)', 'Sumpit', 'Muzik gong'],
    rumah: 'Rumah panjang dengan lansaran, lantai kayu yang melantun seperti trampolin untuk menari dan meraikan tetamu.',
    fakta: [
      'Dalam tarian magunatip, penari melompat di antara batang buluh yang dihentak berirama.',
      'Penari melantun beramai-ramai di atas lansaran, kadang-kadang untuk mencapai hadiah yang digantung di atas.'
    ],
    ikon: ['lansaran', 'tarian magunatip', 'jaruk'],
    warna: ['#3B2416', '#D9A441', '#9C2F2F'],
    corak: 'zigzag'
  },
  {
    id: 'orang-asli',
    nama: 'Orang Asli',
    alias: 'Penduduk asal Semenanjung',
    wilayah: ['semenanjung'],
    lokasi: 'Pedalaman dan pinggir hutan Semenanjung, ramai di Pahang dan Perak',
    ringkasan: 'Penduduk asal Semenanjung Malaysia, terdiri daripada 18 suku dalam tiga kumpulan besar: Negrito, Senoi dan Melayu Proto.',
    bahasa: 'Bahasa Aslian seperti Semai dan Temiar, serta bahasa Melayik seperti Jakun dan Temuan',
    agama: 'Kepercayaan tradisi, serta Islam dan Kristian',
    pakaian: 'Dahulu pakaian dibuat daripada kulit kayu terap dan anyaman daun. Masyarakat Mah Meri memakai topeng dan hiasan anyaman ketika upacara.',
    makanan: ['Nasi buluh', 'Ubi kayu', 'Rebung dan petai hutan', 'Ikan sungai'],
    seni: ['Sewang', 'Ukiran kayu Mah Meri', 'Sumpit', 'Anyaman mengkuang'],
    rumah: 'Rumah bertiang daripada buluh dan kayu, beratap bertam atau rumbia.',
    fakta: [
      'Ukiran kayu Mah Meri dari Pulau Carey, Selangor terkenal hingga ke peringkat antarabangsa.',
      'Semai ialah suku Orang Asli yang paling ramai, diikuti Temiar.'
    ],
    ikon: ['sewang', 'ukiran kayu Mah Meri'],
    warna: ['#1F4D2B', '#C8B273', '#7A4A23'],
    corak: 'titik'
  },
  {
    id: 'baba-nyonya',
    nama: 'Baba Nyonya',
    alias: 'Peranakan Cina',
    wilayah: ['semenanjung'],
    lokasi: 'Melaka dan Pulau Pinang',
    ringkasan: 'Keturunan pedagang Cina yang menetap di Tanah Melayu sejak berabad-abad lalu dan menyerap banyak budaya Melayu.',
    bahasa: 'Bahasa Melayu Baba di Melaka, dan Hokkien Pulau Pinang yang bercampur kata Melayu',
    agama: 'Buddha, Tao dan Kristian',
    pakaian: 'Wanita memakai kebaya nyonya bersulam halus, kerongsang dan kasut manik. Lelaki Baba dahulu memakai baju Cina atau pakaian gaya Barat.',
    makanan: ['Laksa nyonya', 'Ayam pongteh', 'Pai tee', 'Kuih nyonya', 'Ayam buah keluak'],
    seni: ['Dondang sayang', 'Sulaman manik', 'Perabot dan porselin Nyonya'],
    rumah: 'Rumah Peranakan yang panjang dengan halaman dalam, jubin berwarna dan pintu berukir, contohnya di Jalan Tun Tan Cheng Lock, Melaka.',
    fakta: [
      'Baba merujuk kepada lelaki dan Nyonya kepada wanita.',
      'Buah keluak beracun jika tidak diproses, jadi ia direndam berhari-hari sebelum dimasak.'
    ],
    serumpun: ['cina'],
    ikon: ['kebaya nyonya', 'ayam buah keluak', 'pai tee'],
    warna: ['#2E6E62', '#F2A7B6', '#E6B53A'],
    corak: 'manik'
  },
  {
    id: 'kristang',
    nama: 'Portugis-Kristang',
    alias: 'Serani',
    wilayah: ['semenanjung'],
    lokasi: 'Perkampungan Portugis di Ujong Pasir, Melaka',
    ringkasan: 'Keturunan Portugis yang datang selepas penaklukan Melaka pada tahun 1511 dan berkahwin dengan penduduk tempatan.',
    bahasa: 'Kristang, bahasa kreol berasaskan Portugis yang kini terancam',
    agama: 'Katolik',
    makanan: ['Kari debal', 'Sugee cake', 'Pang susi', 'Ikan bakar'],
    seni: ['Tarian branyo', 'Lagu Jinkli Nona', 'Muzik rabana'],
    salam: { frasa: 'Bong dia', maksud: 'Selamat pagi, dalam bahasa Kristang' },
    fakta: [
      'Banyak perkataan Melayu berasal daripada bahasa Portugis, seperti garpu, almari dan jendela.',
      'Rentak tarian branyo mirip joget Melayu.'
    ],
    ikon: ['kari debal', 'tarian branyo', 'Festa San Pedro'],
    warna: ['#1D3557', '#E63946', '#F1FAEE'],
    corak: 'kotak'
  },
  {
    id: 'siam',
    nama: 'Siam',
    alias: 'Masyarakat Siam Malaysia',
    wilayah: ['semenanjung'],
    lokasi: 'Utara Semenanjung: Kedah, Perlis, Kelantan dan Terengganu',
    ringkasan: 'Komuniti kecil yang telah bertapak di utara Semenanjung sejak beratus tahun dan berakar umbi sebagai rakyat Malaysia.',
    bahasa: 'Dialek Thai Selatan, serta loghat Melayu tempatan seperti Kelantan dan Kedah',
    agama: 'Buddha Theravada',
    pakaian: 'Kain sarung bertenun dan baju berpotongan Siam dipakai ketika ke wat dan semasa perayaan.',
    makanan: ['Tomyam', 'Somtam (kerabu betik)', 'Pulut mangga'],
    seni: ['Tarian Menora', 'Seni bina wat', 'Muay Thai'],
    rumah: 'Wat (kuil Buddha) dengan bumbung bertingkat dan hiasan naga, seperti Wat Photivihan di Tumpat, Kelantan.',
    salam: { frasa: 'Sawasdee', maksud: 'Helo, dalam bahasa Thai' },
    fakta: [
      'Wat Photivihan di Tumpat menempatkan patung Buddha berbaring sepanjang kira-kira 40 meter.',
      'Tarian Menora menggabungkan nyanyian, lakonan dan tarian, dengan pakaian bermanik dan kuku panjang melengkung.'
    ],
    ikon: ['tarian Menora', 'Wat Photivihan', 'Loy Krathong'],
    warna: ['#4E2A84', '#F2B705', '#E85D04'],
    corak: 'songket'
  }
];

/*
 * bulan: senarai bulan (1-12) perayaan mungkin jatuh. Kosong = ikut kalendar Hijrah.
 * kuiz: false untuk perayaan yang disambut terlalu ramai etnik untuk dijadikan soalan.
 */
window.PERAYAAN = [
  { nama: 'Tahun Baru Cina', bulan: [1, 2], tarikh: 'Hari pertama kalendar lunar (Januari atau Februari)', etnik: ['cina', 'baba-nyonya'], ket: 'Makan besar sekeluarga pada malam sebelumnya, ang pau, tarian singa dan rumah terbuka.' },
  { nama: 'Ponggal', bulan: [1], tarikh: 'Sekitar 14 atau 15 Januari', etnik: ['india'], ket: 'Pesta menuai masyarakat Tamil. Nasi manis ponggal dimasak dalam periuk tanah sehingga melimpah sebagai tanda rezeki.' },
  { nama: 'Thaipusam', bulan: [1, 2], tarikh: 'Bulan purnama dalam bulan Thai kalendar Tamil', etnik: ['india'], ket: 'Penganut membawa kavadi sebagai nazar kepada Dewa Murugan. Batu Caves di Selangor menjadi tumpuan utama.' },
  { nama: 'Chap Goh Mei', bulan: [2, 3], tarikh: 'Hari ke-15 Tahun Baru Cina', etnik: ['cina', 'baba-nyonya'], ket: 'Penutup sambutan Tahun Baru Cina. Di Pulau Pinang, gadis melontar limau ke laut dengan harapan bertemu jodoh.' },
  { nama: 'Qingming', bulan: [4], tarikh: 'Sekitar 4 atau 5 April', etnik: ['cina', 'baba-nyonya'], ket: 'Keluarga membersihkan kubur dan memperingati nenek moyang.' },
  { nama: 'Vaisakhi', bulan: [4], tarikh: '13 atau 14 April', etnik: ['india'], ket: 'Tahun baru dan pesta menuai masyarakat Sikh Punjabi. Gurdwara dipenuhi jemaah.' },
  { nama: 'Songkran', bulan: [4], tarikh: '13 hingga 15 April', etnik: ['siam'], ket: 'Tahun baru Siam. Air disiram sebagai simbol membersihkan diri dan memohon restu orang tua.' },
  { nama: 'Pesta Kaul', bulan: [4], tarikh: 'Sekitar April, di Mukah', etnik: ['melanau'], ket: 'Upacara tradisi untuk menghormati semangat laut dan menandakan musim baharu menangkap ikan. Buaian tibow yang tinggi menjadi tarikan.' },
  { nama: 'Regatta Lepa', bulan: [4], tarikh: 'Biasanya sekitar April, di Semporna', etnik: ['bajau'], ket: 'Perarakan perahu lepa yang dihias dengan layar berwarna-warni (sambulayang) oleh masyarakat Bajau Pantai Timur.' },
  { nama: 'Pesta Kaamatan', bulan: [5], tarikh: 'Sepanjang Mei, kemuncak 30 dan 31 Mei', etnik: ['kadazandusun', 'murut'], ket: 'Pesta menuai untuk menghormati Bambaazon, semangat padi. Ada pertandingan Unduk Ngadau dan tarian Sumazau.' },
  { nama: 'Gawai Dayak', bulan: [6], tarikh: '1 dan 2 Jun', etnik: ['iban', 'bidayuh', 'orang-ulu'], ket: 'Pesta selepas musim menuai padi. Rumah panjang dibuka kepada tetamu dan tuak dihidangkan.' },
  { nama: 'Festa San Pedro', bulan: [6], tarikh: 'Sekitar 29 Jun', etnik: ['kristang'], ket: 'Pesta santo penaung nelayan. Bot di Perkampungan Portugis dihias dan diberkati paderi.' },
  { nama: 'Hari Orang Asal Sedunia', bulan: [8], tarikh: '9 Ogos', etnik: ['orang-asli'], ket: 'Hari antarabangsa yang turut disambut komuniti Orang Asli dengan pameran budaya, sewang dan kraf tangan.', kuiz: false },
  { nama: 'Pesta Tanglung (Kuih Bulan)', bulan: [9, 10], tarikh: 'Hari ke-15 bulan ke-8 kalendar lunar', etnik: ['cina', 'baba-nyonya'], ket: 'Kuih bulan dan tanglung berwarna-warni menandakan pertengahan musim luruh.' },
  { nama: 'Deepavali', bulan: [10, 11], tarikh: 'Bulan Aippasi kalendar Tamil (Oktober atau November)', etnik: ['india'], ket: 'Pesta cahaya. Rumah dihias dengan kolam dan pelita, dan rumah terbuka diadakan bersama jiran.' },
  { nama: 'Loy Krathong', bulan: [11], tarikh: 'Malam bulan purnama, bulan ke-12 kalendar Siam', etnik: ['siam'], ket: 'Krathong, bekas terapung daripada daun pisang, dilepaskan ke sungai sebagai tanda kesyukuran.' },
  { nama: 'Perayaan Musim Sejuk (Tang Chek)', bulan: [12], tarikh: 'Sekitar 21 atau 22 Disember', etnik: ['cina', 'baba-nyonya'], ket: 'Keluarga berkumpul untuk makan tangyuan, bebola tepung pulut dalam sup manis.' },
  { nama: 'Krismas', bulan: [12], tarikh: '25 Disember', etnik: ['kristang', 'kadazandusun', 'iban', 'bidayuh', 'orang-ulu', 'murut'], ket: 'Disambut penganut Kristian, termasuk ramai masyarakat di Sabah dan Sarawak.', kuiz: false },
  { nama: 'Hari Raya Aidilfitri', bulan: [], tarikh: '1 Syawal', etnik: ['melayu', 'bajau', 'melanau'], ket: 'Sambutan selepas sebulan berpuasa. Bermaaf-maafan, ketupat dan rendang, serta balik kampung. Disambut semua umat Islam di Malaysia.', kuiz: false },
  { nama: 'Hari Raya Aidiladha', bulan: [], tarikh: '10 Zulhijjah', etnik: ['melayu', 'bajau', 'melanau'], ket: 'Ibadah korban dan daging diagihkan kepada keluarga, jiran dan golongan memerlukan.', kuiz: false }
];

/* Banci Penduduk dan Perumahan Malaysia 2020, Jabatan Perangkaan Malaysia (warganegara). */
window.STATISTIK = {
  jumlahPenduduk: '32.4 juta',
  sumber: 'Banci Penduduk dan Perumahan Malaysia 2020, Jabatan Perangkaan Malaysia',
  komposisi: [
    { nama: 'Bumiputera', peratus: 69.4, ket: 'Melayu, Orang Asli dan etnik peribumi Sabah dan Sarawak' },
    { nama: 'Cina', peratus: 23.2 },
    { nama: 'India', peratus: 6.7 },
    { nama: 'Lain-lain', peratus: 0.7 }
  ]
};
