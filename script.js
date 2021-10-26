let num = 0
let count = 0
let road = 100
let vtc = 0
let hrz = 0
let switch_info = 0
document.getElementById("main_picture").height = 200
var character = {
    "chr": [{
        id: 1,
        name: "ทรายดูด/โคลนดูด",
        desc: "โคลนที่อยู่เบื้องล่างของรุ่นพี่โตดูดเขาลงไปอย่างรวดเร็ว“รุ่นพี่!! รีบวิ่งขึ้นมาเร็วเข้า” คาสึยะพูดอย่างตื่นตะหนกเราควรให้พี่โตทำอย่างไรดี",
        text1: "ก้าวถอยหลังช้าๆ",
        text2: "รีบวิ่งอย่างรวดเร็ว",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/894264946169360384/Pto-c.png",
        s_wh: "400",
        s_ht: "150",
        year: "(ประวัติ ความหมาย และหลักการของโคลนดูด)",
        answer: "ก้าวถอยหลังช้าๆ",
        info: " 'นายรู้จักศาสตราจารย์แดเนียล บอนน์รึป่าว' รุ่นพี่โตพูดขึ้น'ศาสตราจารย์และทีมงาน ได้ศึกษาทดลองเกี่ยวกับเหตุการณ์ทรายดูด มันมีลักษณะเป็นบ่อ ด้านบนเป็นทรายหรือดินที่ละเอียดเป็นเม็ดๆ ส่วนด่านล่างมีชั้นของน้ำแทรกอยู่ เมื่อทรายหรือดินด้านบนแห้งก็จะไม่ยืดหยุ่น มีความแข็งแรงพอที่จะเดินผ่านไปได้ แต่หากชั้นน้ำที่อยู่ด้านใต้เกิดแทรกซึมขึ้นมาที่ทรายหรือดินด้านบน จะเกิดความยืดหยุ่น หรือลื่นไหลจนเป็นของเหลว ทำให้เมื่อเดินไปเหยียบแล้วจะเกิดการยุบตัวลง ร่างกายของเราจึงหล่นตามลงไปด้วย  หากเรายิ่งดิ้นรนหรือตะเกียกตะกายขึ้นมาจากบ่อทรายดูด แรงที่เราดิ้นจะยิ่งทำให้ตัวของเราจมลง แต่หากเราปล่อยตัวนิ่งๆ ความหนาแน่นของร่างกายเราจะน้อยกว่าความหนาแน่นของบ่อทราย ทำให้ร่างกายเราลอยขึ้นได้เอง'",
        where: 100,
        wrong: "การเอาตัวรอดจากเหตุการณ์โคลนดูด โดยรวมแล้วคุณต้องตั้งสติ ไม่ร้อนรน <br>ค่อยๆขยับตัวอย่างระมัดระวังถ้าหากคุณโดนโคลนดูดเลยลำตัวแล้ว ให้คุณเอนตัวไปทางด้านหลัง แล้วจึงค่อยๆว่ายท่ากรรเชียงออกมาจากตำแหน่งโคลนดูด",
        alt_pic: "https://cdn.discordapp.com/attachments/884624357899501649/894264941278802000/Pto_like.png",
        alt_pic2: "https://cdn.discordapp.com/attachments/884624357899501649/894264941278802000/Pto_like.png",
        info_size: [-2, 40, 100],
        pos_info: [75, 41],
        text_to_next: "<br> รุ่นพี่โตเดินถอยหลัง 2 3 ก้าวอย่างช้าๆก่อนจะหยุดทรงตัวนิ่ง“นี่โชคดีนะที่เป็นชั้นที่โดน” รุ่นพี่โตพูดอย่างสุขุม และจึงเริ่มผ่อนคลายเพื่อให้ขยับตัวได้สะดวกขึ้น"
    },
    {
        id: 2,
        name: "เหตุการณ์จริง",
        name2: "ทรายดูดที่ใหญ่ที่สุดในโลก",
        desc: "“รุ่นพี่! รับนี่ไว้” ไอซ์พูดพร้อมหยิบบางอย่างออกมาจากเสื้อเชิ้ต“ชะ...เชือก สมแล้วที่เป็นนาย ขอบใจน่ะไอซ์” รุ่นพี่โตพูดอย่างตกใจและปลื้มใจในเวลาเดียวกัน พร้อมพยักหน้าบอกไอซ์ให้ทำบางสิ่ง!!",
        text1: "ผูกเชือกกับต้นไม้ให้ดึงเอง",
        text2: "โยนเชือกให้แล้วดึงขึ้นมา",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/894591656710504448/c1.png",
        s_wh: "400",
        s_ht: "160",
        year: "(ทรายดูดที่ใหญ่ที่สุดในโลก)",
        answer: "ผูกเชือกกับต้นไม้ให้ดึงเอง",
        info: "ทรายดูดในวันที่ 7 มิถุนายน ปี ค.ศ. 1692 ที่เมือง Port Royal ประเทศจาไมก้า<br><br> เคยเกิดเหตุการณ์ทรายดูดที่ยิ่งใหญ่ที่สุดที่มนุษยชาติประสบพบเจอ<br>เกิดแผ่นดินไหวขึ้นและดันน้ำทะเลผ่านชั้นทรายจนเกิดปรากฏการที่เรียกว่า แผ่นดินเหลว (liquefaction) บริเวณรอบเมืองกลายเป็นทรายดูด ทำให้ 1 ใน 3 ของเมืองค่อยๆจมหายไปในทะเลทราย มีผู้เสียชีวิตกว่า 2,000 คน!",
        where: 100,
        alt_pic: "https://cdn.discordapp.com/attachments/884624357899501649/894612391147487323/city.png",
        alt_pic2: "https://cdn.discordapp.com/attachments/884624357899501649/894617008707104839/city.png",
        info_size: [-2, 35, 160],
        pos_info: [75, 44],
        text_to_next: "<br> “เอาหล่ะ นี่แค่ด่านแรก ต่อจากนี้น่าจะมีอะไรที่อันตราย...”<br> ครื้นนนนนนนนน",
        wrong: "การผูกเชือกเพื่อใช้ให้เป็นศูนย์เหนี่ยวนั้น เราควรเรียกวัตถุที่ผูกเป็นวัตถุที่มีความมั่นคง ตามเนื้อเรื่องนั้น ทุกตัวละครยืนอยู่บนดินโคลนของป่า ถึงแม้จะไม่ได้โดนโคลนดูดแต่การทรงตัวในสถานการณ์ที่ยืนอยู่บนโคลนนั้นข้อนข้างที่จะทำได้ยาก ดังนั้นเราผูกเชือกเข้ากับสิ่งที่มีความมั่นคงสูงเช่น ต้นไม้ในบริเวณดินโคลน เพราะรากของต้นไม้ในบริเวณนั้นจะมีความคงทนสูง"
    },
    {
        id: 3,
        name: "เหตุการณ์จริง",
        name2: "ฟ้าผ่าช่วงระหว่างค.ศ.1942ถึง1977",
        desc: "เสียงฟ้าร้องดังสนั่น คลื่นลมพัดแรงจนแทบทำให้ต้นไม้พังหักลงมาได้ รุ่นพี่โตและคาสึยะทำท่าตื้นตะลึง<br>ทั้ง3คนออกวิ่งท่ามกลางคลื่นลมและฟ้าคลื้นคะนองเพื่อหาที่หลบ และที่ที่พวบเข้าไปหลบคือ? ",
        text1: "หลบใต้ต้นไม้",
        text2: "หลบใต้บ้านผุพัง",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/899880030635687956/treehome.png",
        s_wh: "400",
        s_ht: "150",
        year: "(ฟ้าผ่าช่วงระหว่างปี ค.ศ. 1942 ถึง 1977)",
        where: -100,
        answer: "หลบใต้บ้านผุพัง",
        info: "“เหตุการณ์ของ รอย ซัลลิแวน….ชายผู้โดนฟ้าผ่ามาแล้วถึง 7 ครั้ง แต่ก็ยังเอาชีวิตรอดมาได้!” คาสึยะพูดคำตอบอย่างตื่นเต้น<br>“อา..เขาเป็นเจ้าหน้าที่อุทยานแห่งชาติ ประจำอยู่อุทยานแห่งชาติเชนันโดอาห์ในรัฐเวอร์จิเนีย<br>เคยถูกฟ้าผ่ามาแล้วถึงเจ็ดครั้งในช่วงเวลาที่ต่างกัน ซึ่งสามารถรอดชีวิตมาได้ทุกครั้ง ด้วยเหตุนี้เขาจึงได้รับฉายา 'มนุษย์สายล่อฟ้า' เขาได้รับการยอมรับในบันทึกสถิติโลกกินเนสส์ในฐานะที่เคยได้รับอุบัติเหตุจากฟ้าผ่ามากกว่ามนุษย์คนอื่น ๆ และยังคงมีชีวิตอยู่!” พี่โตเล่าเรื่องของรอยอย่างมีภูมิฐาน<br>“แต่ว่าเขา..เสียชีวิตลงด้วยกระสุนของตัวเองในวัย 71 ปี อันเนื่องมาจากความรักที่ไม่สมปรารถนา..”<br>ไอซ์พูดด้วยสีหน้าที่เศร้าสร้อย",
        alt_pic: "https://cdn.discordapp.com/attachments/884624357899501649/899877345438085140/223.png",
        alt_pic2: "https://cdn.discordapp.com/attachments/884624357899501649/899877345438085140/223.png",
        info_size: [-3, 35, 120],
        pos_info: [75, 40],
        text_to_next: "ถึงที่นี่จะดูพึ่งไม่ได้มากนัก แต่ก็คงจะดีกว่าถูกลมแรงพัดหรือถูกฟ้าผ่าใต้ต้นไม้ใหญ่นั้น",
        wrong: "โดยหลักการแล้ว สายฟ้า อาจฟาดลงมาได้ทุกจุด ไม่ว่าบนพื้นดิน ต้นไม้ หรือ บนอาคารสิ่งปลูกสร้างต่างๆ แต่ตามสถิติแล้ววัตถุหรือสิ่งต่างๆ ที่ อยู่สูงกว่าจะมีโอกาสที่จะถูกฟ้าผ่ามากกว่า ด้วยเหตุ นี้จึงห้ามหลบใต้ต้นไม้ใหญ่ในระหว่างที่เกิดฝนฟ้า คะนอง"
    },
    {
        id: 4,
        name: "เหตุการณ์จริง",
        name2: "ไฟไหม้กลางกรุงลอนดอน",
        desc: "อึ้ก!! นี่มันควันไฟ น่าจะเกิดจากประกายไฟที่ฟ้านั่นผ่าลงมาบนต้นไม้ ควันไฟก่อตัวกันเป็นรูปร่าง มีผมฟู เล็บยาวแหลมคม จมูกยืดยาว  ทันใดนั้นก็พุ่งเข้าโจมตีไอซ์ ไอซ์ควรทำอย่างไร ",
        text1: "ต่อยสู้อย่างอาจหาญ",
        text2: "รีบกล้มตัวลงต่ำ",
        name_img: "https://media.discordapp.net/attachments/884624357899501649/899890001859469372/c3db7921cb3f20d2.png?width=902&height=676",
        s_wh: "400",
        s_ht: "150",
        year: "(ไฟไหม้ครั้งใหญ่ ปี 2017 กลางกรุงลอนดอน)",
        where: -300,
        answer: "รีบกล้มตัวลงต่ำ",
        info: "“พวกนายจำเหตุการณ์ไฟไหม้ครั้งใหญ่ปี 2017 กลางกรุงลอนดอนได้มั้ย” รุ่นพี่โตพูดพลางกล้มเดิน “ครับ เหตุการณ์นั้นดูเหมือนจะเป็นชนวนความโกรธของประชาชนชาวลอนดอนที่มีต่อภาครัฐเลยน่ะครับ”“ถ้าเกิดว่าทางเทศบาลและภาครัฐปรับปรุงแก้ไขเหล่าตึกที่เสียหายและมีการจัดทำระบบสปริงเกอร์ดับเพลิงที่ดีพอหล่ะก็….” คาสึยะพูดตามพร้อมมีไอซ์พูดเสริม“อา...ในเหตุการณ์นั้นเกิดเพลิงลุกไหม้อย่างรวดเร็ว เวลาทั้งหมดที่ไฟปะทุนั้นใช้เวลาเพียง 15 นาทีเท่านั้นบ้านเมืองเสียหายและมีผู้เสียชีวิตถึง 58 คน แล้วที่สำคัญที่สุด กว่าครึ่งหนึ่งของผู้เสียชีวิต ตายจากการสูดควันไฟมากกว่าการถูกไฟครอกตาย!!” รุ่นพี่โตพูดด้วยเสียงเคร่งเครียดพร้อมกับเสียงกลืนน้ำลายดัง เอื้อก",
        alt_pic: "https://cdn.discordapp.com/attachments/884624357899501649/899878517708308480/london.png",
        alt_pic2: "https://media.discordapp.net/attachments/884624357899501649/901803712685682769/dead.png?width=894&height=670",
        info_size: [0, 30, 220],
        pos_info: [75, 42],
        text_to_next: "ควันไฟจะลอยตัวในที่สูง แต่ถ้าเป็นข้างล่างนี่ เจ้าสิ่งนั้นต้องตามลงไปไม่ได้อย่างแน่นอน",
        wrong: "ถึงแม้คุณจะมีกล้ามเนื้อที่งดงามหรือบึกบึนเพียงใดแต่การที่คุณจะต่อยสสารที่ไม่มีกายเนื้อนั้นเป็นเรื่องที่ไม่สมควรและไม่ถูกต้องอย่างยิ่ง เพราะสสารบางชนิดหากนำมือไปสัมผัสอาจเป็นอันตรายต่อผิวหนังและกล้ามเนื้อได้ "
    },
    {
        id: 5,
        name: "เหตุการณ์จริง",
        name2: "ไฟฟ้าสถิตก่อเพลิงสยอง",
        desc: "“ที่นี่มืดใช่เล่นเลยน่ะ”เมื่อพวกเขาเดินไปได้สักระยะหนึ่ง พวกเขาก็พบกับรางรถไฟยาวจนสุดลูกหูลูกตาและที่กลางก็มีรางที่มีรถรางจอดอยู่ เขาเดินเข้าไปทางรถรางแล้วจึงยื่นมือออกไปสัมผัส แป็ป “อ้ากกกกกกกกกก!” ไอซ์ร้องตะโกนลั่น และดูเหมือนรอบๆตัวเขาจะมีไฟแล่บออกมาเราจะช่วยอย่างไร",
        text1: "รีบวิ่งเข้าดูอาการ",
        text2: "หยิบผ้ามาฟาด",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/901769403362856980/iceshock.png",
        s_wh: "400",
        s_ht: "200",
        year: "(ไฟฟ้าสถิตก่อเพลิงสยองกลางหน้าหนาว)",
        answer: "หยิบผ้ามาฟาด",
        info: "“พวกนายเคยได้ยินข่าวดังเกี่ยวกับไฟฟ้าสถิตมั้ย ที่ประเทศจีนหน่ะ”พี่โตพูดขึ้น “ข่าวปี2019 บริเวณภายในอุทยานวิทยาศาสตร์และเทคโนโลยี ที่มณฑลกวางตุงสิน่ะครับ” ไอซ์พูดพลางเหงื่อตก “ใช่ เหตุการณ์นั้นเป็นวินาทีสะเทือนขวัญ ท่ามกลางความเหน็บหนาวในฤดูหนาวอยู่ๆก็มีไฟลุกครอกคนงานชาวจีน สาเหตุเกิดจากปฎิกิริยาระหว่างเสื้อผ้าของคนงานและม้วนกระดาษทิชชู่ทำให้เกิดไฟฟ้าสถิตที่ รุนแรงจนไฟลุกไงหล่ะ” พี่โตพูดด้วยท่าทีจริงจังย้ำเยือนถึงความผิดพลาดที่เกิดขึ้น",
        where: -500,
        alt_pic: "https://cdn.discordapp.com/attachments/884624357899501649/901808128016908298/lf.png",
        alt_pic2: "https://cdn.discordapp.com/attachments/884624357899501649/901411668704231454/e219d37c98c8f0e9.png",
        info_size: [-2, 30, 200],
        pos_info: [77, 42],
        text_to_next: "“นี่อาจจะเป็น 1 ในบททดสอบ อย่าไปจับอะไรซี้ซั้วเข้าหล่ะ” พี่โตพูดพลางหันหน้าไปทางไอซ์ “อย่าลืมหล่ะว่ารอบนี้นายเป็นคนนำ ถ้าพลาดรอบหน้าเราอาจจะซวยกันหมด” ไอซ์น้อมรับคำพูดตักเตือนพร้อมลุกขึ้นยืน “จะไม่ทำให้ผิดหวังอีกครับ” ",
        wrong: "หากมีเพื่อนที่โดนไฟฟ้าสถิต เราจะสามารถแก้ได้ง่ายๆโดยการใช้ผ้าฝ้ายหรือพลาสติกม้วนหรือปั้นให้เกิดมวลใช้ผ้าหรือพลาสติกห่อมือแล้วทำการพลักเพื่อนคนนั้นให้ออกจากบริเวณที่มีไฟฟ้าสถิต"
    },
    {
        id: 6,
        name: "เหตุการณ์จริง",
        name2: "คู่หูแม่ลูกเสือโจมตีคน",
        desc: " ทันใดนั้นก็มีเสียงบางอย่างดังขึ้นจากทางด้านหลังของพวกเขาตึก...ตึก...ตึก เสียงก้าวเดินของบางสิ่งบางอย่างดังกึกก้องไปทั่วอุโมงค์สิ่งนั้นชะโงกหน้าเข้ามาในรัศมีของคบเพลิง กรรรรรรรรม“เสือโคร่ง!!” คาสึยะสะดุ้งตกใจพร้อมตะโกนขานชื่อสิ่งมีชีวิตสิ่งนั้นเอาหล่ะไอซ์ รอบนี้เราจะเอายังไงกันดี",
        text1: "วิ่งเข้าใส่เสืออย่างสุดแรง",
        text2: "อยู่นิ่งๆกันไว้น่ะครับ",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/901411692691468308/dontmove.png",
        s_wh: "400",
        s_ht: "300",
        year: "(คู่หูแม่ลูกเสือโจมตีคน)",
        answer: "วิ่งเข้าใส่เสืออย่างสุดแรง",
        info: "“ในประเทศอินเดีย เคยมีเหตุการณ์เสือโจมตีผู้คน” “เป็นฝีมือเสือโคร่งตัวเมียและลูกของมัน….สิน่ะ”ไอซ์พูดเล่าเรื่องพร้อมพี่โตพูดเสริม “ใช่ครับ เจ้าเสือแม่ลูกนี่ออกล่ามนุษย์ครั้งแรกปี 2016 พวกมันติดใจรสชาตินั้นและออกล่าคนเรื่อยๆเป็นเวลา 2 ปี มีคนตายไปมากถึง 13 คน ผู้คนในอินเดียเขาไม่รู้วิธีปกป้องตัวเองเวลาเจอกับเสือโคร่งเพราะที่อินเดียขึ้นชื่อเรื่องการอนุรักษ์เสือก็เลยเชื่อว่าเสือเป็นมิตรกับคนจนโดนมันทำร้ายถึงแก่ชีวิต พวกเขาชล่าใจกันจนเกินไป” 	ไอซ์พูดพร้อมทำหน้าเศร้า“แล้วพวกเค้าจัดการเจ้าเสือแม่ลูกนั่นได้มั้ย”คาสึยะทักถามด้วยความสงสัย “อา….พวกมันถูกยิงตายหน่ะ ถึงแม้จะมีนักอนุรักษ์มาเรียกร้องก็เถอะแต่เพราะเจ้าเสือนั้นฆ่าคนไปมากและยังทำให้ชาวบ้านทั่วอินเดียหวาดผลา...” เขาพูดต่อแต่เนื้อหาก็ยิ่งเศร้าเข้าไปอีก“การดูแลและอนุรักษ์เสือนั้นเป็นศักดิ์ศรีของประเทศอินเดีย แต่เจ้าเสือนั่นก็ก่อคดีให้ชาวบ้านกลัว...งั้นเหรอเป็นการตัดสินใจที่ยากจริงๆนั่นแหละน่ะ” พูดโตพูดด้วยหน้าจริงจัง ",
        where: -700,
        alt_pic: "https://media.discordapp.net/attachments/884624357899501649/901811540322316408/assd.png?width=894&height=670",
        alt_pic2: "https://cdn.discordapp.com/attachments/884624357899501649/901411651209801768/atk.png",
        
        info_size: [-2, 20, 350],
        pos_info: [76, 44],
        text_to_next: "“เหมือนเจ้าเสือนั้นจะไปแล้วน่ะ” ทั้งสามรีบพุ่งตัวไปยังปลายสุดอุโมงค์ “ดูนั้น” พี่โตพูดพร้อมบันไดที่ค่อยๆทอดยาวสู่เรือสำราญ",
        wrong: "การเจอเสือโคร่งนั้นถือว่าเป็นเรื่องหายาก โบราณไทยว่าไว้ว่าเป็นรางดี แต่ถ้าหากคุณต้องประเชิญหน้าเข้ากับเสือโคร่งจริงๆแล้วหล่ะก็ ให้คุณวิ่งเข้าใส่เจ้าเสือตัวนั้นพร้อมทำให้ร่างของคุณดูใหญ่และดุดันที่สุดเท่าที่จะทำได้!"
    },
    {
        id: 7,
        name: "เหตุการณ์จริง",
        name2: "ไททานิก",
        desc: "หลังออกเรือไม่นาน โครมมมสะเก็ดขอวัตถุที่เรือชนพุ่งกระแทกหน้าไอซ์ “นะ...น้ำแข็ง” เรือชนเข้ากับน้ำแข็ง บ้าแล้ว ภูเขาน้ำแข็ง ในเขตใกล้ป่าร้อนชื่นเนี่ยน่ะ!! เราทำไงกันดี",
        text1: "รีบลงน้ำแล้วว่ายห่างจากเรือ",
        text2: "นี่คือเรือที่ไม่มีวันจม",
        name_img: "https://media.discordapp.net/attachments/884624357899501649/901813373551915048/ghhj.png?width=894&height=670",
        s_wh: "400",
        s_ht: "300",
        year: "(ไททานิกนี่ช่วง ปี 1912)",
        where: -900,
        alt_pic: "https://media.discordapp.net/attachments/884624357899501649/901816266178826310/25.png?width=894&height=670",
        alt_pic2: "https://media.discordapp.net/attachments/884624357899501649/901819815394680924/535.png?width=894&height=670",
        answer: "รีบลงน้ำแล้วว่ายห่างจากเรือ",
        info_size: [-2, 20, 350],
        pos_info: [83, 45],
        text_to_next: "เรารอดจากเรือจมแล้ว ฟูบบบ เสียงบางอย่างแหวกเข้ามาใกล้แพยาง  “นั้นมัน.. ฉลาม!!!!” ",
        info: "“ไททานิกนี่ช่วง ปี 1912 สิน่ะครับ” ไอซ์พูดหลังพี่โตพูดเสร็จ “ชนภูเขาน้ำแข็งระหว่างการเดินทางเที่ยวแรกจากเซาท์แทมป์ตัน สหราชอาณาจักร ไปนครนิวยอร์ก สหรัฐอเมริกา การจมของไททานิก ส่งผลให้มีผู้เสียชีวิต 1,514 ศพ นับเป็นภัยพิบัติทางทะเลในยามสงบครั้งที่มีผู้เสียชีวิตมากครั้งหนึ่งในประวัติศาสตร์ ผู้โดยสารบนเรือล้วนแล้วแต่เป็นบรรดาบุคคลที่ร่ำรวยที่สุดในโลก ช่วงก่อนหน้าที่ไททานิกออกเดินทาง ได้เกิดเหตุไฟไหม้บริเวณส่วนเก็บถ่านหินที่ บล็อก 5 และ 6 และไฟยังไหม้ต่อเนื่องตลอดการเดินทาง ความเสียหายนั้นส่งผลให้ผนังกั้นนํ้าชั้นที่ 4 ก่อนถึงห้องเครื่อง และ ส่วนที่เก็บถ่านหินนั้นร้อนมาก อุณหภูมิไม่ตํ่ากว่า 1,500 ฟาเรนไฮต์ จนผนังกั้นนํ้าร้อนจนแดง และตัวเหล็กของผนังกั้นนํ้านั้นบิด งอ ลดการทนทานนํ้าไปกว่า 75%!!”",
        wrong: "จริงๆ แล้วสิ่งสำคัญที่จะทำให้คุณรอดชีวิตจากเหตุเรือล่ม ก็คือต้องตั้งสติก่อน คิดก่อนทำ หาอะไรที่ลอยน้ำได้. ก่อนที่เรือจม ให้รีบว่ายไปให้ไกลจากเรือที่สุด เพราะเมื่อเรือจมจะมีแรงดูดมหาศาลที่จะดึงเราลงไปทำให้จมน้ำได้"},
    {
        id: 8,
        name: "เหตุการณ์จริง",
        name2: "ทะเลแดงที่อียิปต์",
        desc: "ฉลามตัวหนึ่งพุ่งชนแพยางจากใต้น้ำ ร่างของคาสึยะก็ลอยผ่านหน้าของทั้ง 2 ไปและจมลงไปในน้ำ คาสึยะจะทำอย่างไรดี",
        text1: "รีบว่ายขึ้นจากน้ำ",
        text2: "ดูท่าทีแล้วค่อยๆว่าย",
        name_img: "https://media.discordapp.net/attachments/884624357899501649/901820568406462474/54.png?width=894&height=670",
        s_wh: "400",
        s_ht: "300",
        year: "(ทะเลแดงที่อียิปต์)",
        answer: "ดูท่าทีแล้วค่อยๆว่าย",
        alt_pic: "https://media.discordapp.net/attachments/884624357899501649/901828560854069288/65.png?width=894&height=670",
        alt_pic2: "https://media.discordapp.net/attachments/884624357899501649/901829308362948698/katsydue.png?width=894&height=670",
        info_size: [-2, 20, 350],
        pos_info: [83, 45],
        text_to_next: "ทั้ง 3 ลอยมาที่เกาะแห่งหนี่ง แต่เอะ นั้นมัน ภูเขาไฟ…..กำลังจะปะทุด้วย",
        info: "“มันเกิดขึ้นในปี 2010 1ธันวาคม ที่นอกชายฝั่งซาร์มอัลชีค มีคน 4 คนถูกฉลามทำร้าย ทั้ง4 คนล้วนแล้วแต่อาการสาหัส ร่างกายฉีดขาด บางคนเสียแขน บางคนเสียขา และบางคนเสียทั้งคู่ เหตุการณ์นี้ไม่มีผู้เชี่ยวชาญคนไหนคาดการณ์ถึง เพราะผู้ก่อเหตุในครั้งนี้คือ ปลาฉลามหูขาว ฉลามชนิดนี้ไม่จู่โจมผู้คนมา 420 ปีแล้ว พยานในเหตุการณ์นั้นทุกคนให้สัมภาษณ์ด้วยหน้าซี้ดขาวและพูดเป็นประโยคเดียวกันว่า ‘ทะเลเปลี่ยนเป็นสีแดง’  หลังผ่านวันนั้นไปได้ไม่เกิน 4 วัน ก็มีหญิงชราวัย 70 ปีถูกทำร้ายจนเสียชีวิต มีคนพบเห็นเธอที่แนวปะการัง ร่างของเธอถูกฉีกเป็นชิ้นๆ เหตุการณ์ส่งผลกระทบมากมายในหลายหน่วยงาน ทั้งประเทศอียิปต์ ทั้งหน่วยงานอนุรักษ์ฉลาม ทั้งกระทรวงการท่องเที่ยวและกีฬา มีนักวิจัยหลายคนพยายามตามหาสาเหตุที่ฉลามหูขาวทำร้ายผู้คนในรอบ 400 ปี และสาเหตุนั้นไม่ได้มาจากความดุร้ายของเจ้าปลาสายพันธุ์นักล่านี่เลย แต่มันล้วนแล้วมาจากมนุษย์ ทั้งการประมงผิดกฎหมาย และการให้อาหารฉลามในเขตหวงห้ามจนพวกฉลามต้องปรับตัวจนเข้าทำร้ายมนุษย์ในที่สุด กว่าจะกลับมาเปิดชายหาดนี้อีกครั้ง กินเวลาไปหลายเดือนและต้องฆ่าฉลามที่เกิดจากการปรับตัวไปหลายสิบตัว”",
        where: -1100,
        wrong: "โดยปกติแล้วฉลามจะไม่เข้ามาโจมตีมนุษย์ เพราะมนุษย์เป็นสิ่งมีชีวิตที่รูปร่างน่ากลัวสำหรับฉลาม แต่ในบางครั้งที่มนุษย์ตีเท้าว่ายน้ำในทะเลฉลามก็เข้ามาจู่โจมเพราะคิดว่านั้นเป็นพฤติกรรมของปลาขนาดเล็กที่ว่ายหนีตน และถ้าคุณบังเอิญเจอหน้าฉลามเข้า เป็นไปได้มากว่าที่เดี๋ยวมันก็ว่ายไปทางอื่นเอง จำไว้อย่างว่าคุณไม่มีทางว่ายหนีฉลามทัน เพราะงั้นอย่าคิดฝันจะว่ายหนีเลย เว้นแต่จะอยู่ใกล้ฝั่งแค่เอื้อม จุดสำคัญคืออย่าสติแตก คุณต้องประเมินสถานการณ์แบบวินาทีต่อวินาที คิดอย่างเดียวว่าต้องรอดไปให้ได้"},
    {
        id: 9,
        name: "เหตุการณ์จริง",
        name2: "ภูเขาไฟแทมโบรา",
        desc: "ตรงกลางเกาะมีวิหาร เราจะไปหลบที่นั้นกัน เมื่อทั้ง 3 พุ่งทยานเข้าสู่วิหาร ทั้ง 3 ควรทำอย่างไรต่อเพื่อให้ปลอดภัยจากการปะทุของภูเขาไฟ",
        text1: "หาทางลงชั้นล่าง",
        text2: "ช่วยกันปิดประตู",
        name_img: "https://media.discordapp.net/attachments/884624357899501649/901831626923847760/gf54.png?width=894&height=670",
        s_wh: "400",
        s_ht: "300",
        year: "(ภูเขาไฟแทมโบรา)",
        where: -1300,
        alt_pic: "https://media.discordapp.net/attachments/884624357899501649/901832479982370836/sd.png?width=894&height=670",
        alt_pic2: "https://media.discordapp.net/attachments/884624357899501649/901833434400456774/1515.png?width=894&height=670",
        answer: "ช่วยกันปิดประตู",
        info_size: [-2, 20, 350],
        pos_info: [83, 44],
        text_to_next: "ในที่สุดเราก็รอดกันแล้วสินะ",
        info: "“การระเบิดของภูเขาไฟแทมโบรา เกาะซัมบาวา ประเทศอินโดนิเซีย” ไอซ์และพรี่โตหยุดฟังคาสึยะพูด“ความรุนแรงระดับ 7 มีความเสียหายอภิมหาพินาศ ส่งเสียงดังสนั่นหวั่นไหวไปทั่วสารทิศ ดังไกลไปถึงเกาะสุมาตรา ที่อยู่ไกลออกไป 1,930 กม. เถ้าถ่านหมอกปกคลุมทั่วท้องฟ้าจนมืดมิดอยู่นานสองวัน มีการประเมินกันว่า การระเบิดของแทมโบราเทียบเท่ากับระเบิดปรมาณู 6,000 ลูกระเบิดพร้อมกัน สภาวอากาศทั่วโลกแปรปรวนอย่างหนักยิ่งกว่าครั้งใด ยุโรป อเมริกาเหนือต้องตกอยู่ในสภาพไร้แสงแดดนานนับสัปดาห์ อังกฤษฝนตกทุกวัน กว่าที่ฝุ่นละอองจากแรงระเบิดนี้กว่าจะจางหายไปหมด ต้องใช้เวลาหลายปีกว่าจะตกลงสู่พื้น นอกจากสภาพแวดล้อมที่เสียหายแล้ว การสูญเสียชีวิตของมนุษย์ถึง 70,000 คน ก็เป็นเครื่องการันตีได้แล้วว่า การระเบิดของแทมโบราได้รับการจดบันทึกไว้ในหน้าประวัติศาสตร์อย่างแน่นอน”",
        wrong: "ในเหตุภูเขาไฟปะทุ หากเราอยู่ในสิ่งปลูกสร้างไม่ว่าจะหลุมหลบภัยหรือบ้านพัก เราก็ควรที่จะมองหาและปิดประตู หน้าต่างให้สนิทเพื่อไม่ให้ควันไฟเข้ามาภายในเขตหลบภัย และการมองหาสิ่งที่มีความเป็นไปได้ว่าอาจมี หรือไม่มีอย่างทางลงใต้ดินนั้นผิดถนัด ในเหตุการณ์ถึงชีวิตเช่นนี้เราควรมองและตัดสินใจจากปัจจัยที่มีอยู่เป็นหลักมิใช่การคาดคะเนมั่วซั่ว"
    },
    {
        id: 10,
        where: -1500,
        name: "",
        desc: "สรุปแล้วเหตุการณ์ที่เกิดขึ่นในอดีตล้วนเป็นสิ่งกระตุ่นเพื่อให้มนุษย์ได้ตระหนักและเรียนรู้ที่พัฒนาและหาทางป้องกันเพื่อไม่ให้เกินหรือลดความสูญเสียที่เกิดขึ้นให้ได้มากที่สุด",
        text1: "-",
        text2: "-",
        name_img: "https://cdn.discordapp.com/attachments/884624357899501649/894228000185389156/P_to_3P.png",
        s_wh: "400",
        s_ht: "300",
        year: "",
        answer: "-",
        alt_pic: "",
        alt_pic2: "",
        info_size: [-2, 20, 350],
        pos_info: [75, 41],
        text_to_next: "",
        info: "",
        wrong: ""
    }
    ]
}
// document.querySelector('div#description').onload = setDes();



function sizeimg() {
    document.getElementById("main_picture").height = 130
    document.getElementById('div_img_info').style.left = character.chr[num].info_size[0] + "%"
    document.getElementById('div_img_info').style.top = character.chr[num].info_size[1] + "%"
    document.getElementById('img_info').style.height = character.chr[num].info_size[2] + "px"
    document.getElementById('age').innerHTML = character.chr[num].year
    document.getElementById('more_info').style.top = character.chr[num].pos_info[0] + "%"
    document.getElementById('more_info').style.left = character.chr[num].pos_info[1] + "%"
    setTimeout(function () {
        document.getElementById('intro').style.opacity = 100
    }, 500)
}

function moveGround() {
    if (count == 1) {
        document.querySelector("#groundWater").style.bottom = "0%"

    } else if (count == 2) {
        count++
    } else {
        road -= 100
        document.querySelector("#ground").style.left = road + "%"
    }

}

function changeImg(textBtn) {
    if (textBtn.textContent == character.chr[num].answer) {
        if (count == 1) {
            setTimeout(function () {
                document.querySelector("#groundWater").style.bottom = "-100%"
                document.getElementById('water').style.height = '0%'
                count++
            }, 9000)

        }
        num += 1
        image = document.querySelector('IMG.character');
        btnA = document.querySelector('BUTTON#routeA');
        btnB = document.querySelector('BUTTON#routeB');
        DivFinal = document.querySelector('DIV#final');
        btnRestart = document.querySelector('BUTTON#text_restart');
        document.getElementById('div_img_info').style.left = character.chr[num].info_size[0] + "%"
        document.getElementById('div_img_info').style.top = character.chr[num].info_size[1] + "%"
        document.getElementById('img_info').style.height = character.chr[num].info_size[2] + "px"
        if (character.chr[num].id == 10) {
            document.getElementById('more_info').style.display = 'none'
            document.getElementById('routeA').style.display = 'none'
            document.getElementById('routeB').style.display = 'none'

            setTimeout(function () {
                document.getElementById('description').style.opacity = 0
            }, 18500)
            setTimeout(function () {
                document.getElementById('main_picture').style.display = 'none'
                document.getElementById('summary').style.display = 'block'
            }, 20000)
        }

        image.classList.toggle("hid");
        btnA.classList.toggle("hid");
        btnB.classList.toggle("hid");

        document.getElementById('description').style.opacity = 0
        document.getElementById('more_info').style.opacity = 0
        document.getElementById('img_info').style.height = character.chr[num].s_ht
        setTimeout(function () {
            description.innerHTML = character.chr[num-1].text_to_next + ""
        }, 1900)
        setTimeout(function () {
            document.getElementById('description').style.opacity = 1
        }, 2800)
        setTimeout(function () {
            document.getElementById('description').style.opacity = 0
        }, 8300)
        setTimeout(function () {
            moveGround()
        }, 9500)
        setTimeout(function () {
            description.innerHTML = character.chr[num].desc + ""
            routeA.innerHTML = character.chr[num].text1 + ""
            routeB.innerHTML = character.chr[num].text2 + ""
            type_info.innerHTML = character.chr[num].name + ""
            document.getElementById('age').innerHTML = character.chr[num].year
            text_info.innerHTML = character.chr[num].info + ""
            type_this_info.innerHTML = character.chr[num].name2 + ""
            document.getElementById("img_info").src = character.chr[num].alt_pic + "";
            document.getElementById('more_info').style.top = character.chr[num].pos_info[0] + "%"
            document.getElementById('more_info').style.left = character.chr[num].pos_info[1] + "%"
        }, 10200)
        setTimeout(function () {
            document.getElementById('description').style.opacity = 1
        }, 11500)
        setTimeout(function () {
            moveGround()
        }, 14500)
        setTimeout(function () {
            image.getAttribute('src');
            image.setAttribute('src', character.chr[num].name_img);
            document.getElementById("main_picture").height = character.chr[num].s_ht
            image.classList.toggle("hid");
            btnA.classList.toggle("hid");
            btnB.classList.toggle("hid");
            document.getElementById('more_info').style.opacity = 1

        }, 15500)

        // if (character.chr[num].id != 10) {}

    } else {
        ending()
    }

}

function ending() {
    description.style.opacity = 0
    document.getElementById('ground').style.opacity = 0
    document.querySelector("#groundWater").style.bottom = "-100%"
    document.getElementById('water').style.height = '0%'
    document.getElementById('more_info').style.opacity = 0


    setTimeout(function () {
        document.getElementById('main_picture').style.display = 'none'
        document.getElementById('text_main_pic').style.display = 'none'
        document.getElementById('sky_obj').style.opacity = 0
        document.getElementById('bg-sky').style.backgroundColor = '#232323'
    }, 500)
    setTimeout(function () {
        document.getElementById("main_picture").src = character.chr[num].alt_pic2 + ""
        document.getElementById('routeA').style.display = 'none'
        document.getElementById('routeB').style.display = 'none'
    }, 600)
    setTimeout(function () {
        document.getElementById("description").className = "h8 cl-white";
        description.innerHTML = character.chr[num].wrong
    }, 2300)
    setTimeout(function () {
        description.style.opacity = 1
        document.getElementById('main_picture').style.display = 'block'
        document.getElementById('text_main_pic').style.display = 'block'
        document.getElementById('restart').style.display = 'block'
        document.getElementById('retry').style.display = 'block'
    }, 4000)
}

function start() {
    document.getElementById('contain').style.display = 'flex';
    document.getElementById('skip').style.display = 'none';

    if (count == 0) {
        count++
        document.getElementsByClassName('page5')[0].style.marginTop += -20 + 'em'
        document.getElementById('water').style.height = '100%'
        document.getElementById('scroll').style.top = '70%'
        document.getElementById('scroll_dialog').innerHTML = "“เห้ๆๆๆ เดินมาซักพักแล้วนา ยังไม่เห็นอะไรที่มันทำให้ใจดวงนี้หวั่นไหวเลยน่ะ” คาสึยะพูดขึ้นอย่างผิดหวัง “ไอ้ชั้นหน่ะก็คิดมาตั้งแต่แรกแล้วว่าเรื่องป่านี่หน่ะ มันเหลวไหลจริงๆ” ไอซ์พูดกึ่งยุแยงเพื่อให้เลิกไปต่อ เงียบหน่อยเด็กๆ เหมือนกำลังจะมีอะไรเกิ.. ฟื้ดดดดดดดดดดดดด"
        document.body.style.overflow = "hidden"
    } else {
        document.querySelector("#groundWater").style.bottom = "0%"
        document.getElementById('scroll').style.top = '-40%'
        document.getElementById('contain').style.opacity = 100
        setTimeout(function () {
            document.getElementById('description').style.opacity = 1
            document.getElementById('more_info').style.opacity = 1
        }, 2500)
    }

}

function close_info() {
    if (switch_info == 0) {
        info.style.display = "block"
        switch_info++
    } else {
        info.style.display = "none"
        switch_info = 0
    }
}
let stack = 1;
window.addEventListener(
    "scroll",
    () => {
        if (window.pageYOffset < 300 && stack > 1) {
            stack = 1;
            showPage('intro');
        }

        if (window.pageYOffset < 800 && stack > 2) {
            stack = 2;
            showPage('dialog');
        }

        if (window.pageYOffset < 1300 && stack > 3) {
            stack = 3;
            showPage('page1');
        }

        if (window.pageYOffset < 1800 && stack > 4) {
            stack = 4;
            showPage('page2');
        }

        if (window.pageYOffset < 2300 && stack > 5) {
            stack = 5;
            showPage('page3');
        }

        if (window.pageYOffset < 2800 && stack > 6) {
            stack = 6;
            showPage('page4');
            setTimeout(function () {
                document.getElementById('skip').style.opacity = 1
            }, 300)
            setTimeout(function () {
                document.getElementById('skip').style.display = 'block'
            }, 500)
        }

        if (window.pageYOffset >= 300) {
            stack = 2;
            marginPage('intro');
        }
        if (window.pageYOffset >= 800) {
            stack = 3;
            marginPage('dialog');
        }
        if (window.pageYOffset >= 1300) {
            stack = 4;
            marginPage('page1');
        }
        if (window.pageYOffset >= 1800) {
            stack = 5;
            marginPage('page2');
        }
        if (window.pageYOffset >= 2300) {
            stack = 6;
            marginPage('page3');
        }
        if (window.pageYOffset >= 2800) {
            stack = 7;
            marginPage('page4');
            setTimeout(function () {
                document.getElementById('skip').style.opacity = 0
            }, 300)
            setTimeout(function () {
                document.getElementById('skip').style.display = 'none'
            }, 500)

        }
    },
);

function marginPage(p) {

    if (p == 'intro') {
        document.getElementById('intro').style.marginTop = -16 + 'em';
        document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลง</b>';
    }

    if (p == 'dialog') {
        document.getElementsByClassName('dialog')[0].style.marginTop = -14 + 'em'
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901700982747041792/bg0.png')" 
    }

    if (p == 'page1') {
        document.getElementsByClassName('page1')[0].style.marginTop = -22 + 'em'
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702071017955338/bg0.1.png')"
    }

    if (p == 'page2') {
        document.getElementsByClassName('page2')[0].style.marginTop = -22 + 'em'
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702325800935464/bg0.3.png')"
    }

    if (p == 'page3') {
        document.getElementsByClassName('page3')[0].style.marginTop = -22 + 'em'
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702436522172466/bg0.4.png')"
    }

    if (p == 'page4') {
        document.getElementsByClassName('page4')[0].style.marginTop = -19 + 'em'
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702436522172466/bg0.4.png')"
        document.getElementById('water').style.bottom = 0 + '%'
        document.getElementById('scroll_dialog').innerHTML = '<b>มาเริ่มผจญภัยกัน</b>'
        image = document.querySelector('IMG#next_icon')
        image.style.cursor = 'pointer';
        image.getAttribute('src')
        image.setAttribute('src', 'https://cdn.discordapp.com/attachments/884624357899501649/884631801610510346/VvV.png')
        image.getAttribute('onclick')
        image.setAttribute('onclick', 'start()')
    }
    console.log(window.pageYOffset)
}

// โค้ดหน้าสุดท้าย กดเลือกตัวละครแล้วกลับมาหน้าเดิม
function select(a) {
    console.log(a.id.split("_")[1])
    num = (a.id.split("_")[1]) - 1
    console.log(num)
    move_to(num)
    document.getElementById('final').style.opacity = 0
    document.getElementById('final').style.zIndex = -1
    document.getElementById('text_restart').style.opacity = 0
}

function move_to(num) {
    setTimeout(function () {
        description.innerHTML = character.chr[num].desc + ""
        routeA.innerHTML = character.chr[num].text1 + ""
        routeB.innerHTML = character.chr[num].text2 + ""
    }, 3000)
    setTimeout(function () {
        document.getElementById('main_picture').style.display = 'block'
        document.getElementById("main_picture").height = character.chr[num].s_ht
        image.setAttribute('src', character.chr[num].name_img);
        document.getElementById('routeA').style.display = 'block'
        document.getElementById('routeB').style.display = 'block'
        document.getElementById('description').style.opacity = 1
        document.getElementById('more_info').style.opacity = 1
    }, 5500)
    setTimeout(function () {

        document.getElementById('description').style.opacity = 1
    }, 3500)
    setTimeout(function () {
        moveGround()
    }, 5000)

    road = character.chr[num].where
    document.querySelector("#ground").style.left = road + "%"

}

// โค้ดกดเริ่มใหม่
function restart() {
    if (num == 0) {
        //ใส่โค้ดน้ำตรงนี้
        document.getElementById('restart').style.display = 'none'
        document.getElementById('retry').style.display = 'none'
        description.innerHTML = character.chr[num].desc
        document.getElementById('ground').style.opacity = 1
        document.getElementById('bg-sky').style.backgroundColor = 'rgb(121, 215, 246)'
        document.getElementById('description').style.opacity = 0
        document.querySelector("#groundWater").style.bottom = "0%"
        document.getElementById('text_main_pic').style.display = 'none'
        document.getElementById('main_picture').style.opacity = 0
        document.getElementById('water').style.height = "100%"
        setTimeout(function () {
            document.getElementById("description").className = "h6 cl-white";
            document.getElementById("main_picture").src = character.chr[num].name_img + ""
        }, 1700)
        setTimeout(function () {
            document.getElementById('sky_obj').style.opacity = 1
        }, 2100)
        setTimeout(function () {
            document.getElementById('routeA').style.display = 'block'
            document.getElementById('routeB').style.display = 'block'
            document.getElementById('main_picture').style.opacity = 1
            document.getElementById('more_info').style.opacity = 1
            document.getElementById('description').style.opacity = 1
        }, 3700)
        road = character.chr[num].where
        document.querySelector("#ground").style.left = road + "%"
    } else {
        move_to(num)
        document.getElementById('restart').style.display = 'none'
        document.getElementById('retry').style.display = 'none'
        document.getElementById('ground').style.opacity = 1
        document.getElementById('water').style.height = 0 + "%"
        document.getElementById('bg-sky').style.backgroundColor = 'rgb(121, 215, 246)'
        document.getElementById('main_picture').style.opacity = 0
        document.getElementById('text_main_pic').style.display = 'none'
        document.getElementById('description').style.opacity = 0
        description.innerHTML = character.chr[num].wrong
        // document.getElementById('more_info').style.opacity = 0

        setTimeout(function () {
            document.getElementById('sky_obj').style.opacity = 1


        }, 100)
        setTimeout(function () {
            document.getElementById("description").className = "h6 cl-white";
        }, 1700)

        setTimeout(function () {

            document.getElementById('routeA').style.display = 'block'
            document.getElementById('routeB').style.display = 'block'
            document.getElementById('main_picture').style.opacity = 1

        }, 6000)
    }
}

function showPage(p) {
    if (p == 'intro') {
        document.getElementById('intro').style.marginTop = 1 + 'em';
        document.getElementById('scroll_dialog').innerHTML = '<b style="color: red;">เลื่อนเมาส์ลง</b>เพื่อเริ่มเนื้อเรื่องสุดเร้าใจ</b>';
    }

    if (p == 'dialog') {
        document.getElementsByClassName('dialog')[0].style.marginTop = 57 + 'em';
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901700982747041792/bg0.png')"
    }

    if (p == 'page1') {
        document.getElementsByClassName('page1')[0].style.marginTop = 57 + 'em';
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702071017955338/bg0.1.png')"
    }

    if (p == 'page2') {
        document.getElementsByClassName('page2')[0].style.marginTop = 57 + 'em';
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702325800935464/bg0.3.png')"
    }

    if (p == 'page3') {
        document.getElementsByClassName('page3')[0].style.marginTop = 57 + 'em';
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702325800935464/bg0.3.png')"
    }

    if (p == 'page4') {
        document.getElementsByClassName('page4')[0].style.marginTop = 50 + 'em';
        document.getElementById('water').style.bottom = -100 + '%';
        document.getElementById('scroll_dialog').innerHTML = '<b>เลื่อนเมาส์ลง</b>';
        document.getElementById('bg-sky').style.background = "url('https://cdn.discordapp.com/attachments/884624357899501649/901702436522172466/bg0.4.png')"
        image = document.querySelector('IMG#next_icon');
        image.style.cursor = 'default';
        image.getAttribute('src');
        image.setAttribute('src', 'https://cdn.discordapp.com/attachments/884624357899501649/884631801610510346/VvV.png');
        image.getAttribute('onclick');
        image.setAttribute('onclick', '');
    }
}

function skip() {
    window.scrollBy(0, 3000);
}

function select_all() {
    document.getElementById('final').style.display = 'block'
    setTimeout(function () {
        console.log("NuTz")
        document.getElementById('final').style.opacity = 1
        document.getElementById('summary').style.opacity = 0
    }, 300)
    setTimeout(function () {
        document.getElementById('final').style.opacity = 1
        document.getElementById('summary').style.display = 'none'

    }, 500)
}