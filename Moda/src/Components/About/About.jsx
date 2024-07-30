import React from "react"
import { Link } from 'react-router-dom'



function About() {
  return (
    <div>
    <div className='p-10 flex flex-col items-center justify-center text-wrap'>
      <div className='text-black text-xl justify-items-start text-left font-thin '>About Us</div>
      <div>
      <h1 className='font-bold text-2xl text-left font-serif mt-6 mb-4'>Company Profile <br /></h1>
      <p className='text-left' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, soluta in maxime nostrum odit animi quos consequatur quasi. Dolorum voluptas sunt laudantium adipisci hic sapiente eveniet, animi perferendis sed fugiat, provident perspiciatis odio voluptates. Necessitatibus modi expedita, adipisci excepturi non sint nam nesciunt. Eaque illo enim maxime illum voluptates nostrum.<br /><br />

        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic accusantium iusto at impedit tempora. Quae libero dicta repellendus corrupti aliquid in, ex eveniet vitae quia consequatur nostrum quam hic consectetur omnis fuga voluptates assumenda rem sapiente accusantium velit. Beatae hic aliquam vero optio placeat excepturi quam quibusdam eligendi quisquam ipsam.<br /> <br /></p>

        <h6 className='text-left font-semibold'> For business development and franchisee enquiries contact </h6>
      <Link
        to='#'
        className="underline"
      >
        bussinessSumit@moda.com
      </Link>
      <h6 className='text-left font-semibold'> For PR & Media related queries, contact </h6>
      <Link
        to='#'
        className="underline"
      >
        press@houseofsumit.com
      </Link>
      </div>
      
     
      <div>
      <h1 className='font-bold text-2xl text-left font-serif mt-6 mb-4'>Moda Brand Profile <br /></h1>
      <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat sapiente voluptas nemo eius accusantium asperiores, inventore, eveniet cupiditate sed veniam perferendis. Et atque dolorum quasi nulla placeat commodi ea consectetur voluptatibus facere quod doloremque, libero perferendis, suscipit unde reiciendis nihil?</p>
      </div>

     <div>
     <h1 className='font-bold text-2xl text-left font-serif mt-6 mb-4'>Moda Girl Brand Profile <br /></h1>
     <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt itaque, numquam qui iusto id, ipsam consectetur fuga quas aperiam iste voluptas. Sed deserunt accusantium dolore, ducimus temporibus dolor, doloremque beatae cumque quia error illum perferendis eos. Repellat fuga nostrum veniam.</p>
     </div>


     
    </div>

    <div className=" p-5 py-10 bg-gray-200 w-full flex gap-x-16 items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <svg fill="#000000" width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="a"></g> <g id="b"> <path d="M26.5,51c1.3789,0,2.5-1.1211,2.5-2.5s-1.1211-2.5-2.5-2.5-2.5,1.1211-2.5,2.5,1.1211,2.5,2.5,2.5Zm0-4c.8271,0,1.5,.6729,1.5,1.5s-.6729,1.5-1.5,1.5-1.5-.6729-1.5-1.5,.6729-1.5,1.5-1.5Zm1.0254-18.9443c-.6943-.46-1.0898-.7627-1.1455-.8086-.0186-.127,.0234-.2441,.0703-.2969,.0156-.0186,.0303-.0352,.1006-.04,.1572-.002,.2617,.1045,.2676,.1113,.4609,.6377,1.3604,.8164,2.0488,.4062,.6826-.4043,.8916-1.25,.4854-1.9678-.3096-.5462-1.1729-1.2924-2.4286-1.4048-.0156-.0726-.0285-.1354-.0327-.1725-.0724-.444-.7509-.436-.8206,0l-.0422,.2158c-.7497,.1201-1.421,.4658-1.9034,1.0188-.6045,.6904-.874,1.6113-.7402,2.5264,.1904,1.292,1.4189,2.1074,2.4072,2.7637,.3105,.2061,.9561,.6348,1.0645,.8047,.0928,.1523,.1816,.3721,.0762,.5537-.085,.1455-.2637,.2373-.4971,.2539-.1924,.0078-.5342-.291-.6699-.498-.4258-.6729-1.3262-.8975-2.0449-.5068-.6699,.3633-.9062,1.1299-.5869,1.9072,.3528,.8613,1.5208,1.7751,2.8857,1.934l.0511,.2616c.0697,.436,.7482,.4439,.8206,0,.0062-.0555,.0311-.1678,.0576-.29,1.1255-.1612,2.1003-.7606,2.6313-1.6771,.6045-1.043,.5654-2.2734-.1074-3.376-.4355-.7168-1.2041-1.2256-1.9473-1.7188Zm1.1895,4.5928c-.4102,.71-1.2041,1.1709-2.1182,1.2344l-.1699,.0059c-1.125,0-2.1377-.7842-2.3672-1.3467-.0586-.1406-.1611-.4863,.1367-.6475,.085-.0459,.1787-.0684,.2715-.0684,.1826,0,.3613,.085,.458,.2373,.0059,.0098,.6982,1.0029,1.584,.9531,.5635-.0391,1.0322-.3115,1.2871-.748,.2715-.4688,.2393-1.0439-.0869-1.5781-.2012-.3291-.6924-.6699-1.3662-1.1172-.8643-.5742-1.8447-1.2246-1.9688-2.0742-.0928-.626,.0908-1.2539,.5029-1.7236,.3721-.4268,.9131-.6855,1.5215-.7285,1.1299-.0791,1.8955,.5742,2.083,.9053,.1055,.1875,.1367,.46-.126,.6152-.2393,.1416-.5723,.084-.7383-.1465-.1016-.1289-.4688-.5527-1.1348-.5088-.3203,.0234-.585,.1504-.7861,.3789-.251,.2881-.3662,.6992-.3076,1.1006,.0557,.3809,.4258,.7314,1.583,1.498,.6523,.4316,1.3262,.8789,1.6465,1.4053,.4766,.7803,.5107,1.6377,.0957,2.3535Zm26.0879-12.5459c-.123-.0938-.2822-.124-.4355-.085-.0156,.0059-1.6318,.4346-3.3975-.3428-.5264-.2314-1.127-.5078-1.7568-.7969-1.9437-.8945-3.9327-1.8059-5.2129-2.1177v-2.2603c0-2.4814-2.0186-4.5-4.5-4.5H13.5c-2.4814,0-4.5,2.0186-4.5,4.5V49.5c0,2.4814,2.0186,4.5,4.5,4.5h26c2.4814,0,4.5-2.0186,4.5-4.5v-15.8103c.3678,.1519,.7612,.3335,1.1855,.533,1.6982,.7969,3.8115,1.7891,6.4727,1.7891,2.1777,0,3.1797-1.1377,3.2207-1.1855,.0781-.0908,.1211-.207,.1211-.3262v-14c0-.1562-.0732-.3027-.1973-.3975Zm-.8027,14.1836c-.2754,.2324-1.0186,.7256-2.3418,.7256-2.4375,0-4.4395-.9395-6.0479-1.6943-1.0498-.4932-1.957-.9189-2.7715-.9893-.5498-.0479-1.1416-.0752-1.7471-.1025-2.2402-.1035-4.7783-.2217-5.752-1.4678-.3682-.4717-.4424-1.1826-.1895-1.8135,.3125-.7754,1.0566-1.3018,2.043-1.4434,.7441-.1074,1.6709-.1426,2.6533-.1807,2.3857-.0908,5.0898-.1943,6.9961-1.3281,.2373-.1406,.3154-.4482,.1738-.6855-.1426-.2373-.4492-.3145-.6855-.1738-1.6865,1.0039-4.2559,1.1016-6.5225,1.1885-.4174,.0157-.8212,.0326-1.2123,.0535-1.4095-5.455-6.4222-9.3748-12.0963-9.3748-6.8926,0-12.5,5.6074-12.5,12.5s5.6074,12.5,12.5,12.5c5.582,0,10.4257-3.6604,11.9813-8.9614,.8444,.1016,1.7225,.1468,2.5646,.186,.5918,.0273,1.1699,.0537,1.707,.0996,.0767,.0066,.1649,.0322,.2471,.048v16.1277c0,1.9297-1.5703,3.5-3.5,3.5H13.5c-1.9297,0-3.5-1.5703-3.5-3.5V14.5c0-1.9297,1.5703-3.5,3.5-3.5h26c1.9297,0,3.5,1.5703,3.5,3.5v2.1494c-1.6783,.1625-5.3053,2.1736-5.7402,2.4122-.2422,.1328-.3311,.4365-.1982,.6787,.1338,.2432,.4385,.3301,.6787,.1982,1.6641-.9111,4.6211-2.3096,5.5303-2.2979,.9609,.0459,3.4912,1.21,5.5244,2.1455,.6348,.292,1.2412,.5713,1.7725,.8047,1.3877,.6094,2.6914,.5908,3.4326,.5039v13.1914Zm-19.4482-2.9131c.6519,.8354,1.7186,1.2675,2.9341,1.5099-1.4708,4.8082-5.8954,8.1171-10.9859,8.1171-6.3408,0-11.5-5.1592-11.5-11.5s5.1592-11.5,11.5-11.5c5.1597,0,9.7238,3.5217,11.0817,8.4492-.1823,.0181-.3618,.0373-.5309,.0616-1.3486,.1943-2.3789,.9453-2.8281,2.0605-.3896,.9697-.2637,2.043,.3291,2.8018Z"></path> </g> </g></svg>
        <p className="text-base font-medium">Free Shipping</p>
        <p className="text-base text-gray-500">On orders of INR 1499 and above</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <svg width="64px" height="64px" viewBox="0 0 1024 1024" fill="#000000" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M488.006 999.898C218.982 999.898 0.106 781.022 0.106 512c0-269.022 218.876-487.898 487.9-487.898 156.624 0 304.81 76.03 396.386 203.364a8.016 8.016 0 0 1-1.828 11.17c-3.61 2.562-8.592 1.766-11.17-1.828C782.818 113.63 639.49 40.1 488.006 40.1 227.792 40.098 16.104 251.788 16.104 512c0 260.21 211.69 471.902 471.902 471.902 260.21 0 471.902-211.692 471.902-471.902a7.992 7.992 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998c0 269.022-218.876 487.898-487.898 487.898z" fill=""></path><path d="M1015.896 567.988a7.976 7.976 0 0 1-5.656-2.344l-47.99-47.99a7.996 7.996 0 1 1 11.31-11.31l47.99 47.992a7.994 7.994 0 0 1 0 11.308 7.96 7.96 0 0 1-5.654 2.344z" fill=""></path><path d="M919.916 567.988a7.994 7.994 0 0 1-5.656-13.652l47.99-47.992a7.996 7.996 0 1 1 11.31 11.31l-47.99 47.99a7.96 7.96 0 0 1-5.654 2.344zM727.956 735.954H280.048c-4.422 0-8-3.578-8-7.998V376.028a7.994 7.994 0 0 1 8-7.998h447.906c4.422 0 8 3.578 8 7.998v351.928a7.994 7.994 0 0 1-7.998 7.998z m-439.91-15.996h431.91V384.026H288.046v335.932z" fill=""></path><path d="M727.956 384.026H280.048a8.002 8.002 0 0 1-7.39-4.936 8.018 8.018 0 0 1 1.734-8.716l63.988-63.986a7.992 7.992 0 0 1 5.656-2.344h319.934c2.124 0 4.154 0.844 5.654 2.344l63.988 63.986a8.02 8.02 0 0 1 1.734 8.716 8.002 8.002 0 0 1-7.39 4.936z m-428.598-15.996h409.29l-47.99-47.99H347.346l-47.988 47.99z" fill=""></path><path d="M456.012 384.026a8.008 8.008 0 0 1-7.156-11.576l31.994-63.988c2-3.936 6.78-5.546 10.732-3.578a8.006 8.006 0 0 1 3.578 10.732l-31.994 63.986a8.014 8.014 0 0 1-7.154 4.424zM551.992 384.026a8.016 8.016 0 0 1-7.154-4.42l-31.994-63.986a8.006 8.006 0 0 1 3.578-10.732 7.992 7.992 0 0 1 10.732 3.578l31.992 63.988a8.006 8.006 0 0 1-3.578 10.732 7.992 7.992 0 0 1-3.576 0.84z" fill=""></path><path d="M456.012 448.014a7.994 7.994 0 0 1-7.998-8v-63.988c0-4.42 3.578-7.998 7.998-7.998s7.998 3.578 7.998 7.998v63.988c0 4.422-3.578 8-7.998 8z" fill=""></path><path d="M551.992 448.014h-95.98c-4.42 0-7.998-3.578-7.998-8s3.578-7.998 7.998-7.998h95.98c4.42 0 7.998 3.578 7.998 7.998s-3.578 8-7.998 8z" fill=""></path><path d="M551.992 448.014a7.994 7.994 0 0 1-7.998-8v-63.988a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v63.988c0 4.422-3.578 8-7.998 8zM456.012 456.012a7.994 7.994 0 0 1-7.998-7.998v-8c0-4.42 3.578-7.998 7.998-7.998s7.998 3.578 7.998 7.998v8a7.994 7.994 0 0 1-7.998 7.998zM488.006 456.012c-4.422 0-8-3.578-8-7.998v-8a7.994 7.994 0 0 1 8-7.998 7.994 7.994 0 0 1 7.998 7.998v8a7.994 7.994 0 0 1-7.998 7.998zM519.998 456.012a7.994 7.994 0 0 1-7.998-7.998v-8a7.994 7.994 0 0 1 7.998-7.998c4.422 0 8 3.578 8 7.998v8a7.994 7.994 0 0 1-8 7.998z" fill=""></path><path d="M551.992 456.012a7.994 7.994 0 0 1-7.998-7.998v-8a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v8a7.994 7.994 0 0 1-7.998 7.998zM695.962 703.96h-31.994a7.994 7.994 0 0 1-7.998-8v-31.992c0-4.422 3.578-8 7.998-8h31.994a7.994 7.994 0 0 1 7.998 8v31.992c0 4.422-3.578 8-7.998 8z m-23.996-15.998h15.996v-15.996h-15.996v15.996zM631.974 703.96h-31.992a7.994 7.994 0 0 1-7.998-8v-31.992c0-4.422 3.576-8 7.998-8h31.992c4.422 0 8 3.578 8 8v31.992c0 4.422-3.578 8-8 8z m-23.994-15.998h15.996v-15.996h-15.996v15.996zM472.008 671.966H312.04a7.994 7.994 0 0 1-7.998-7.998c0-4.422 3.578-8 7.998-8h159.968a7.994 7.994 0 0 1 7.998 8 7.994 7.994 0 0 1-7.998 7.998zM392.026 703.96h-79.984a7.994 7.994 0 0 1-7.998-8 7.994 7.994 0 0 1 7.998-7.998h79.984a7.994 7.994 0 0 1 7.998 7.998c0 4.422-3.578 8-7.998 8z" fill=""></path></g></svg>
        <p className="text-base font-medium">Easy Returns</p>
        <p className="text-base text-gray-500">Free returns until 7 days of delivery.</p>
      </div>
      <div className="flex flex-col items-center justify-center">
       <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511 511" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M471.5,28h-432C17.72,28,0,45.72,0,67.5v256C0,345.28,17.72,363,39.5,363h176c4.142,0,7.5-3.358,7.5-7.5 s-3.358-7.5-7.5-7.5h-176C25.991,348,15,337.009,15,323.5v-256C15,53.991,25.991,43,39.5,43h432c13.509,0,24.5,10.991,24.5,24.5 v256c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-256C511,45.72,493.28,28,471.5,28z"></path> <path d="M63.5,307h152c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5h-152c-4.142,0-7.5,3.358-7.5,7.5S59.358,307,63.5,307z"></path> <path d="M151,155.5v-32c0-12.958-10.542-23.5-23.5-23.5h-48C66.542,100,56,110.542,56,123.5v32c0,12.958,10.542,23.5,23.5,23.5h48 C140.458,179,151,168.458,151,155.5z M71,155.5V147h8.5c4.142,0,7.5-3.358,7.5-7.5s-3.358-7.5-7.5-7.5H71v-8.5 c0-4.687,3.813-8.5,8.5-8.5H96v49H79.5C74.813,164,71,160.187,71,155.5z M127.5,164H111v-49h16.5c4.687,0,8.5,3.813,8.5,8.5v8.5 h-8.5c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h8.5v8.5C136,160.187,132.187,164,127.5,164z"></path> <path d="M56,251.5c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5V251.5z"></path> <path d="M80,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S80,231.358,80,235.5z"></path> <path d="M104,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S104,231.358,104,235.5z"></path> <path d="M128,235.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16c0-4.142-3.358-7.5-7.5-7.5S128,231.358,128,235.5z"></path> <path d="M175,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S175,255.642,175,251.5z"></path> <path d="M199,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S199,255.642,199,251.5z"></path> <path d="M215.5,228c-4.142,0-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5s7.5-3.358,7.5-7.5v-16 C223,231.358,219.642,228,215.5,228z"></path> <path d="M247,251.5v-16c0-4.142-3.358-7.5-7.5-7.5s-7.5,3.358-7.5,7.5v16c0,4.142,3.358,7.5,7.5,7.5S247,255.642,247,251.5z"></path> <path d="M415.5,179c21.78,0,39.5-17.72,39.5-39.5S437.28,100,415.5,100h-48c-21.78,0-39.5,17.72-39.5,39.5s17.72,39.5,39.5,39.5 H415.5z M343,139.5c0-13.509,10.991-24.5,24.5-24.5h48c13.509,0,24.5,10.991,24.5,24.5S429.009,164,415.5,164h-48 C353.991,164,343,153.009,343,139.5z"></path> <path d="M473.781,274.948c-1.705-1.179-3.822-1.599-5.848-1.164c-6.816,1.47-13.691,2.216-20.434,2.216 c-33.301,0-63.826-16.915-81.652-45.247c-1.373-2.182-3.77-3.506-6.348-3.506s-4.975,1.324-6.348,3.506 C335.326,259.085,304.801,276,271.5,276c-6.742,0-13.617-0.746-20.434-2.216c-2.024-0.436-4.143-0.016-5.848,1.164 c-1.705,1.179-2.846,3.012-3.151,5.062c-1.372,9.2-2.067,18.449-2.067,27.49c0,78.615,49.25,152.258,117.106,175.108 c0.776,0.261,1.585,0.392,2.394,0.392s1.617-0.131,2.394-0.392C429.75,459.758,479,386.115,479,307.5 c0-9.041-0.695-18.29-2.067-27.49C476.627,277.959,475.486,276.127,473.781,274.948z M285.252,407.035 C265.744,377.584,255,342.235,255,307.5c0-5.801,0.313-11.699,0.932-17.616c5.206,0.742,10.417,1.116,15.568,1.116 c30.881,0,59.683-12.584,80.5-34.458v208.044C326.04,453.367,302.616,433.248,285.252,407.035z M433.748,407.035 c-17.364,26.213-40.787,46.332-66.748,57.552V256.542C387.817,278.416,416.619,291,447.5,291c5.151,0,10.362-0.375,15.568-1.116 c0.619,5.917,0.932,11.815,0.932,17.616C464,342.235,453.256,377.584,433.748,407.035z"></path> </g> </g></svg>
        <p className="text-base font-medium">Secure Payment</p>
        <p className="text-base text-gray-500">Safe & hassle free checkout</p>
      </div>
     </div>

    </div>
  )
}

export default About;