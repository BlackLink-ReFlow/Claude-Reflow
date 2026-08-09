const DEFAULT_SETTINGS = {
  accentColor: '#c14ad7',
  sidebarBg: '#ffffff',
  textColor: '#ffffff',
  gradientColor: '#6841a3',
  svgColor: '#ffffff',
  reflowMenuTextColor: '#ffffff',
  userMessageBg: '#0f0f0f',
  inputBoxBg: '#1c1c1c',
  inputBoxBorder: '#6841a3',
  inputBoxText: '#ffffff',
  reflowButtonColor: '#c14ad7',
  messageInputBg: '#1a1a1a',
  chatBg: '#0a0a0a',
  hoverTextColor: '#c14ad7',
  sidebarWidth: 240,
  reflowIconStyle: 'gear',
  reflowLabelStyle: 'full'
};

const REFLOW_LABEL_TEXT = {
  full: 'Claude ReFlow',
  short: 'ReFlow'
};
// hello :)
const REFLOW_WAVE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" fill="currentColor">
<path d="M0 0 C3.15525038 0.5546722 6.31407892 1.08277828 9.47460938 1.60644531 C41.7313538 7.02278885 41.7313538 7.02278885 56.57617188 13.98925781 C57.63376709 14.47048096 58.6913623 14.9517041 59.78100586 15.44750977 C61.92574243 16.42420716 64.06782138 17.40676422 66.20703125 18.39550781 C69.04409291 19.70073746 71.89158976 20.97715094 74.74804688 22.23925781 C84.17679114 26.40815062 93.48156085 30.75729143 102.65283203 35.46533203 C105.23522706 36.7871976 107.82306543 38.09805867 110.4115448 39.40795898 C125.39953951 47.00205973 140.1363868 54.85529824 154.58398438 63.44628906 C159.27814675 66.23752137 164.0205277 68.92883424 168.7902832 71.58837891 C193.52491934 85.38143134 218.12842067 100.05842153 240.26367188 117.80175781 C241.69453125 118.94257813 241.69453125 118.94257813 243.15429688 120.10644531 C253.06341691 128.10570701 262.35045401 136.70174395 271.3503418 145.703125 C272.82323159 147.17382191 274.30397453 148.63629315 275.78515625 150.09863281 C282.05308151 156.32993174 287.7802048 162.86467176 293.26367188 169.80175781 C298.03856493 175.68564195 302.85844245 181.52630057 307.76367188 187.30175781 C311.92310072 192.19910335 316.03043518 197.13382646 320.07617188 202.12597656 C321.55639041 203.93660102 323.05714185 205.7306002 324.57617188 207.50878906 C325.33929688 208.40984375 326.10242188 209.31089844 326.88867188 210.23925781 C327.5615625 211.02171875 328.23445313 211.80417969 328.92773438 212.61035156 C335.19662025 221.17503344 339.61996461 230.43467918 343.57617188 240.23925781 C347.42456533 249.61019698 351.49323522 258.79035753 356.17895508 267.77612305 C359.43091617 274.27134478 361.15206987 280.58322989 359.62695312 287.82519531 C359.28019531 288.60121094 358.9334375 289.37722656 358.57617188 290.17675781 C358.24230469 290.96824219 357.9084375 291.75972656 357.56445312 292.57519531 C356.10300477 295.07677357 354.38641589 296.84436438 352.26367188 298.80175781 C341.54328856 285.23884861 332.2050094 270.86738967 325.20507812 255.03198242 C323.30346462 250.76306358 321.29311165 247.41274183 318.26367188 243.80175781 C318.26367188 243.14175781 318.26367188 242.48175781 318.26367188 241.80175781 C317.60367187 241.80175781 316.94367188 241.80175781 316.26367188 241.80175781 C314.95898437 240.54394531 314.95898437 240.54394531 313.38867188 238.67675781 C312.45474609 237.58041016 312.45474609 237.58041016 311.50195312 236.46191406 C310.76332031 235.5840625 310.0246875 234.70621094 309.26367188 233.80175781 C307.37247048 231.56862834 305.47574591 229.34026855 303.57617188 227.11425781 C303.06626709 226.51645508 302.5563623 225.91865234 302.03100586 225.30273438 C297.93481026 220.52649015 293.70730832 215.8867921 289.41992188 211.28222656 C286.20218191 207.82613549 283.05722008 204.32122862 279.96289062 200.75488281 C274.1846815 194.11326313 268.27739624 187.70378455 261.91601562 181.61425781 C260.26367188 179.80175781 260.26367188 179.80175781 260.26367188 177.80175781 C259.36841797 177.40150391 259.36841797 177.40150391 258.45507812 176.99316406 C256.21792863 175.77688849 254.91947121 174.59818522 253.20117188 172.73925781 C249.49353649 168.92972125 245.50388468 165.60776162 241.35742188 162.28613281 C239.26963895 160.60957986 237.2122341 158.92147259 235.16992188 157.19238281 C216.84858503 141.8638281 196.1409899 129.34071158 175.40917969 117.58642578 C172.04989975 115.68046984 168.69899754 113.76017039 165.34960938 111.83691406 C159.43727174 108.44419116 153.51613332 105.06714847 147.59130859 101.69628906 C144.51253655 99.94344453 141.43667977 98.18559367 138.36132812 96.42675781 C126.7815752 89.82264864 115.09362794 83.44137771 103.32324219 77.18530273 C97.54941352 74.11418572 91.80624103 71.00579066 86.12988281 67.75756836 C69.04858573 58.02469731 51.69201837 50.61543973 32.82723999 45.19104004 C22.93634761 42.3451287 13.50003919 39.08172186 4.01367188 35.05175781 C-6.24335424 30.70104296 -16.42885991 27.31014746 -27.19384766 24.47558594 C-31.68271687 23.28591059 -36.14935761 22.02569179 -40.61132812 20.73925781 C-41.42593506 20.51778076 -42.24054199 20.29630371 -43.07983398 20.06811523 C-49.17436642 18.30325481 -54.37670253 15.85539093 -58.33007812 10.73925781 C-58.62914062 10.09988281 -58.92820313 9.46050781 -59.23632812 8.80175781 C-59.55601563 8.16238281 -59.87570313 7.52300781 -60.20507812 6.86425781 C-60.88027295 4.24291318 -60.41946696 2.39049445 -59.73632812 -0.19824219 C-39.8692896 -5.4710107 -20.01143893 -3.51856344 0 0 Z " transform="translate(106.736328125,29.1982421875)"/>
<path d="M0 0 C1.4236084 0.36738281 1.4236084 0.36738281 2.87597656 0.7421875 C19.77148928 5.18506038 35.88278904 11.31214423 52 18 C52.76407166 18.31640442 53.52814331 18.63280884 54.31536865 18.95880127 C98.01400071 37.07201332 138.38060983 56.95211645 176 86 C176.59184082 86.45294434 177.18368164 86.90588867 177.79345703 87.37255859 C184.54397279 92.5428104 191.12762218 97.87862655 197.5625 103.4375 C198.39116577 104.15280884 198.39116577 104.15280884 199.23657227 104.88256836 C209.90980314 114.20158435 220.13372188 123.96673797 230.13183594 134.00146484 C231.8914348 135.76648544 233.65640397 137.52601133 235.421875 139.28515625 C241.16131667 145.02087519 246.76856843 150.79041892 252 157 C252.97251677 158.11844261 253.94644613 159.23565871 254.921875 160.3515625 C261.38417413 167.81300044 267.58658907 175.43509477 273.63232422 183.23681641 C281.09361725 192.85578432 288.66787392 202.37276362 296.44433594 211.73974609 C313.75159461 232.60127146 328.28818279 254.09099201 340.22338867 278.45263672 C343.66611953 285.4490714 347.27274903 292.25527129 351.40258789 298.87133789 C359.34196746 311.75252152 364.75038549 325.13508109 369.3125 339.5 C370.08114241 341.87893492 370.85334052 344.25668843 371.62651062 346.63415527 C372.09970139 348.09340759 372.56971406 349.55369643 373.03572083 351.01525879 C374.14435169 354.47518578 375.32404633 357.87950582 376.63745117 361.26757812 C378.07294189 365.19980927 378.56875558 367.85620933 378 372 C376.00477484 374.29081408 374.61121106 374.85132704 371.6875 375.5625 C367.46955807 374.67967494 364.85970413 372.14970688 362 369 C360.3101434 366.05773803 359.15855103 362.99551964 358 359.8125 C355.47082429 353.36915289 352.81158084 347.59759181 348.91015625 341.84765625 C342.51967553 332.32074327 337.00863097 322.25319807 331.96899414 311.95922852 C319.92506719 287.46336203 303.79790419 265.70415826 286.43701172 244.73681641 C284.36290234 242.22998424 282.30721012 239.70820634 280.25 237.1875 C279.18458984 235.888125 279.18458984 235.888125 278.09765625 234.5625 C276.68482406 232.83658209 275.27604291 231.10734098 273.87109375 229.375 C269.19473477 223.61948126 264.42445529 217.95536003 259.58496094 212.3371582 C256.63303254 208.90991137 253.70479903 205.46497807 250.79931641 201.99829102 C245.91244944 196.17312457 240.88157 190.51684136 235.703125 184.94921875 C233.74777929 182.84243561 231.87531658 180.68029098 230.01171875 178.4921875 C225.06686398 172.82030616 219.70325842 167.55412081 214.37573242 162.24536133 C212.56639067 160.44137915 210.76245681 158.63211335 208.95898438 156.82226562 C203.14323936 151.00281542 197.30893795 145.29021685 191 140 C189.95518261 139.09959216 188.91088777 138.1985775 187.8671875 137.296875 C133.75481054 91.23777607 70.31781814 55.3959335 4.69140625 28.51708984 C1.52454372 27.21557637 -1.62924339 25.88767071 -4.78125 24.55078125 C-15.75328442 20.01586794 -26.72074569 17.27045397 -38.41137695 15.1640625 C-48.033393 13.3510497 -54.40676548 10.21135025 -61 3 C-58.40551518 -0.1243444 -55.50113757 -1.20305715 -51.75 -2.625 C-50.65171875 -3.05039063 -49.5534375 -3.47578125 -48.421875 -3.9140625 C-32.5905092 -8.93817174 -15.5193714 -4.03451665 0 0 Z " transform="translate(90,109)"/>
<path d="M0 0 C3.38905381 1.59204167 6.69561096 3.33020102 9.99560547 5.09814453 C15.00257957 7.70508146 19.99889364 9.28313814 25.4375 10.75 C43.96992378 15.85696175 61.10769994 25.33215407 77 36 C78.24667276 36.82011063 79.49407549 37.63911265 80.7421875 38.45703125 C84.51588492 40.94050035 88.25994254 43.46625888 92 46 C92.66032227 46.4448877 93.32064453 46.88977539 94.00097656 47.34814453 C107.76967471 56.63393401 120.68940711 66.56067035 133.22070312 77.45458984 C136.20057905 80.04276419 139.19282444 82.61647548 142.1875 85.1875 C142.77192871 85.68934814 143.35635742 86.19119629 143.95849609 86.70825195 C148.32218542 90.44443859 152.752794 94.09178023 157.2109375 97.71484375 C165.26886132 104.31692419 173.24147478 111.04847467 181 118 C181.97453125 118.87011719 182.9490625 119.74023438 183.953125 120.63671875 C201.1670958 136.16350271 215.2410779 153.69404396 228 173 C228.59973633 173.9065332 229.19947266 174.81306641 229.81738281 175.74707031 C237.49144549 187.40685653 244.85278664 199.20172489 251.6875 211.375 C252.25122314 212.37781006 252.81494629 213.38062012 253.39575195 214.41381836 C258.08819523 222.89906592 262.80875663 231.43827726 264.8125 241 C265.04582031 242.0725 265.27914063 243.145 265.51953125 244.25 C266 247 266 247 266 250 C264.68 250.33 263.36 250.66 262 251 C248.61463876 236.80585561 237.5156729 220.46549089 226.53125 204.39453125 C215.56747504 188.36220405 203.17659281 173.27889759 187.83203125 161.2578125 C180.07795487 155.07594195 172.61421603 148.51964773 165.3125 141.8125 C161.81740111 138.60354956 158.2571616 135.53934163 154.5625 132.5625 C150.56772765 129.34054279 146.75475062 125.99315657 143 122.5 C138.39603984 118.22230473 133.66038534 114.17567023 128.76171875 110.234375 C125.90888405 107.92628243 123.11190378 105.56000415 120.3125 103.1875 C96.02636862 82.94905719 69.16814815 66.83082028 41.02880859 52.54003906 C37.88457237 50.94130924 34.74913147 49.32604499 31.61328125 47.7109375 C18.23220779 40.86878663 4.70316079 34.73285437 -9.23388672 29.11572266 C-13.50018285 27.39489536 -17.75376305 25.64469957 -22 23.875 C-22.77633789 23.55305664 -23.55267578 23.23111328 -24.35253906 22.89941406 C-28.61647348 21.10263897 -32.71293307 19.13820031 -36.78955078 16.95239258 C-45.12837624 12.49336281 -53.62697725 9.80229826 -62.75268555 7.34545898 C-75.72997635 3.84358271 -75.72997635 3.84358271 -78.9375 -0.8125 C-80.1737421 -4.52122629 -80.38439805 -6.33541694 -79 -10 C-59.743861 -22.96086279 -19.27679706 -8.02922673 0 0 Z " transform="translate(110,227)"/>
<path d="M0 0 C21.89164817 5.95785362 41.79943482 20.79886301 58.9465332 35.12646484 C63.89182325 39.21696037 69.04425957 42.86782704 74.375 46.4375 C88.89662832 56.18529753 102.39696944 67.0683955 115.48291016 78.65771484 C117.4153904 80.36752759 119.36414762 82.0583168 121.3125 83.75 C122.5430734 84.83173514 123.77218634 85.91513346 125 87 C125.77472656 87.68191406 126.54945313 88.36382812 127.34765625 89.06640625 C129.92138015 91.35371883 132.46695036 93.66774088 135 96 C136.2065625 97.10601562 136.2065625 97.10601562 137.4375 98.234375 C150.03819599 110.26965515 159.35965931 124.98317728 168 140 C168.45665039 140.78745605 168.91330078 141.57491211 169.38378906 142.38623047 C170.71571863 144.70409084 172.01940313 147.03529101 173.3125 149.375 C173.91807739 150.43642212 173.91807739 150.43642212 174.53588867 151.51928711 C177.16047384 156.40150321 177.16047384 156.40150321 176.37890625 159.31640625 C174.40014105 161.73240569 172.2887436 163.87473808 170 166 C169.38125 166.61875 168.7625 167.2375 168.125 167.875 C166 169 166 169 162.6875 169.1875 C154.51860999 166.55684051 150.49848702 157.85117518 146.01953125 151 C142.94607313 146.43439876 139.53069956 142.21722447 136 138 C135.56171875 137.47148437 135.1234375 136.94296875 134.671875 136.3984375 C125.22866548 125.03545462 115.39979296 114.39511992 103.765625 105.23046875 C101.50649819 103.40848936 99.3344251 101.54155453 97.1640625 99.6171875 C93.28268604 96.20184955 89.25485982 93.04464325 85.125 89.9375 C83.62836265 88.80279997 82.13228766 87.66735789 80.63671875 86.53125 C79.49082275 85.66113281 79.49082275 85.66113281 78.32177734 84.7734375 C74.50415545 81.85743272 70.72235518 78.89582464 66.9375 75.9375 C60.6001525 70.9902451 54.20426066 66.13150001 47.75756836 61.32788086 C43.45446988 58.11355041 39.21094589 54.83393969 35 51.5 C18.75960437 38.313441 18.75960437 38.313441 0.6953125 27.953125 C-9.28783763 23.29644794 -19.78773583 16.22964962 -26 7 C-26.625 3.75 -26.625 3.75 -26 1 C-19.53108455 -5.20487808 -7.88393845 -1.94832962 0 0 Z " transform="translate(302,32)"/>
<path d="M0 0 C12.64003977 8.80559126 24.98966703 18.59515851 35.69140625 29.69921875 C37.45262109 31.46482564 39.30404156 33.08177722 41.1953125 34.70703125 C42.55093232 35.8928721 43.90509233 37.08038376 45.2578125 38.26953125 C45.91910156 38.83929688 46.58039063 39.4090625 47.26171875 39.99609375 C52.92082959 45.20114678 56.49878806 51.25751052 60.05517578 57.9921875 C61.43958719 60.61374446 62.8478142 63.22204186 64.25390625 65.83203125 C80.22832598 95.70802294 80.22832598 95.70802294 78.2578125 107.26953125 C77.18494146 110.4328892 75.87346916 113.34836631 74.2578125 116.26953125 C70.78139363 113.04826239 68.12021006 109.44706542 65.5078125 105.51953125 C65.07315674 104.86774902 64.63850098 104.2159668 64.19067383 103.54443359 C59.55737838 96.43648903 55.93271752 88.90138818 52.2578125 81.26953125 C45.42650648 67.56661651 35.51236365 57.5325082 23.28125 48.578125 C20.54762758 46.49082416 18.06917302 44.31517096 15.5703125 41.95703125 C3.85467417 31.21457693 -9.94515589 23.02599415 -23.7421875 15.26953125 C-24.77263184 14.6873584 -25.80307617 14.10518555 -26.86474609 13.50537109 C-49.19108936 0.91242571 -71.2603774 -11.12901502 -95.8671875 -18.66796875 C-96.54907135 -18.8791333 -97.2309552 -19.09029785 -97.9335022 -19.30786133 C-107.86708022 -22.37793912 -117.84625917 -25.1900595 -127.9296875 -27.73046875 C-129.03135254 -28.00882568 -130.13301758 -28.28718262 -131.26806641 -28.57397461 C-137.81182121 -30.16978134 -144.25818744 -31.28845347 -150.95825195 -32.0078125 C-154.25585497 -32.86380697 -155.57582897 -34.15773528 -157.7421875 -36.73046875 C-156.86351574 -40.32503505 -156.35968362 -42.25922171 -153.3671875 -44.54296875 C-111.77683429 -63.35765234 -33.8834575 -22.74294223 0 0 Z " transform="translate(189.7421875,359.73046875)"/>
<path d="M0 0 C5.71639484 1.26040777 10.66296124 2.97519004 15.875 5.625 C16.91926147 6.15395874 16.91926147 6.15395874 17.98461914 6.69360352 C23.93539937 9.80114885 29.04987141 13.45076211 34 18 C34.7321875 18.65226562 35.464375 19.30453125 36.21875 19.9765625 C46.51538537 29.65684998 54.01817969 41.69119397 61.3125 53.6875 C61.90643555 54.64422607 62.50037109 55.60095215 63.11230469 56.58666992 C63.64887695 57.49006104 64.18544922 58.39345215 64.73828125 59.32421875 C65.46591675 60.5321106 65.46591675 60.5321106 66.20825195 61.7644043 C67 64 67 64 66.24047852 66.17651367 C64.85606768 68.21157853 63.37337089 69.89189873 61.625 71.625 C60.74714844 72.51058594 60.74714844 72.51058594 59.8515625 73.4140625 C57.12690325 75.74784237 54.75568277 76.84542852 51.25 77.5625 C43.39542929 76.20305507 37.87220798 67.73614677 33.3125 61.6875 C32.72090088 60.91639893 32.12930176 60.14529785 31.51977539 59.35083008 C26.65952215 52.97646318 21.9553078 46.4878413 17.35083008 39.92651367 C12.89822093 33.63933459 8.05600046 28.87709402 1.76953125 24.4296875 C-0.93266919 22.24645271 -1.93013285 20.28529087 -2.75 16.9375 C-3.12586439 11.01763579 -1.86744863 5.6023459 0 0 Z " transform="translate(416,25)"/>
<path d="M0 0 C1.15935059 0.35876221 2.31870117 0.71752441 3.51318359 1.0871582 C11.12067534 3.47432229 18.67764013 6.00925365 26.1875 8.6875 C27.05624756 8.99558594 27.92499512 9.30367188 28.82006836 9.62109375 C39.68838247 13.62839324 47.38850003 19.13955617 55.63867188 27.14501953 C56.90667445 28.35170922 58.22390439 29.50618525 59.546875 30.65234375 C72.40130115 42.19916449 78.40391465 62.10400856 82.0625 78.5 C82.32691858 84.29605536 81.13151123 86.70466995 78.0625 91.5 C76.7425 91.5 75.4225 91.5 74.0625 91.5 C73.79622803 90.81599121 73.52995605 90.13198242 73.25561523 89.42724609 C63.93252502 63.41417097 63.93252502 63.41417097 47.85546875 41.3828125 C46.0625 39.5 46.0625 39.5 46.0625 37.5 C45.5154541 37.23840088 44.9684082 36.97680176 44.40478516 36.70727539 C41.71554568 35.32117062 39.17000662 33.75708315 36.5859375 32.18359375 C30.48891926 28.61422455 24.30643085 25.99516344 17.6875 23.5625 C16.57060791 23.1406543 15.45371582 22.71880859 14.30297852 22.28417969 C8.82369162 20.2245483 3.32481119 18.22923573 -2.19921875 16.29296875 C-3.17906738 15.9467749 -4.15891602 15.60058105 -5.16845703 15.24389648 C-6.98935999 14.60474353 -8.81432241 13.97698018 -10.64404297 13.36352539 C-17.89362139 10.83046388 -25.87080549 7.3698359 -29.9375 0.5 C-29.6075 -0.49 -29.2775 -1.48 -28.9375 -2.5 C-19.35552789 -5.6939907 -9.27448701 -2.97497743 0 0 Z " transform="translate(67.9375,395.5)"/>
</svg>`;

const THEME_PRESETS = {
  'ReFlow Default': {
    accentColor: '#c14ad7',
    sidebarBg: '#ffffff',
    textColor: '#ffffff',
    gradientColor: '#6841a3',
    svgColor: '#ffffff',
    reflowMenuTextColor: '#ffffff',
    userMessageBg: '#0f0f0f',
    inputBoxBg: '#1c1c1c',
    inputBoxBorder: '#6841a3',
    inputBoxText: '#ffffff',
    reflowButtonColor: '#c14ad7',
    messageInputBg: '#1a1a1a',
    chatBg: '#0a0a0a',
    hoverTextColor: '#c14ad7',
    sidebarWidth: 240
  },
  'Monotone': {
    accentColor: '#141414',
    sidebarBg: '#1a1a1a',
    textColor: '#e0e0e0',
    gradientColor: '#404040',
    svgColor: '#b0b0b0',
    reflowMenuTextColor: '#999999',
    userMessageBg: '#0f0f0f',
    inputBoxBg: '#2a2a2a',
    inputBoxBorder: '#404040',
    inputBoxText: '#e0e0e0',
    reflowButtonColor: '#666666',
    messageInputBg: '#252525',
    chatBg: '#141414',
    hoverTextColor: '#666666',
    sidebarWidth: 240
  },
  'Midnight': {
    accentColor: '#230632',
    sidebarBg: '#0a0e27',
    textColor: '#e0e0e0',
    gradientColor: '#001a4d',
    svgColor: '#ffffff',
    reflowMenuTextColor: '#3a5d92',
    userMessageBg: '#080808',
    inputBoxBg: '#121212',
    inputBoxBorder: '#00054d',
    inputBoxText: '#e0e0e0',
    reflowButtonColor: '#0088cc',
    messageInputBg: '#0d1a3d',
    chatBg: '#050a15',
    hoverTextColor: '#0088cc',
    sidebarWidth: 240
  },
  'Sunset': {
    accentColor: '#a63fa3',
    sidebarBg: '#1a1a1a',
    textColor: '#ffffff',
    gradientColor: '#ff4500',
    svgColor: '#ffffff',
    reflowMenuTextColor: '#ffffff',
    userMessageBg: '#171717',
    inputBoxBg: '#0d0d0d',
    inputBoxBorder: '#ef75ff',
    inputBoxText: '#ffffff',
    reflowButtonColor: '#ff4500',
    messageInputBg: '#1a0d1a',
    chatBg: '#121212',
    hoverTextColor: '#ef75ff',
    sidebarWidth: 240
  }
};

let currentSettings = DEFAULT_SETTINGS;

function getContrastColor(hex) {

  try {

    const rgb = parseInt(
      hex.slice(1),
      16
    );

    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;

    const brightness =
      (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 128
      ? '#000000'
      : '#ffffff';

  } catch {

    return '#ffffff';
  }
}

function hexToRgba(hex, alpha) {

  try {

    const rgb = parseInt(
      hex.slice(1),
      16
    );

    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = rgb & 0xff;

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;

  } catch {

    return `rgba(200, 100, 255, ${alpha})`;
  }
}

function applyBannerGradient(settings) {

  const stickyBanner =
    document.querySelector(
      '[class*="sticky"][class*="top-0"]'
    );

  if (stickyBanner) {

    const gradientDivs =
      stickyBanner.querySelectorAll('div');

    gradientDivs.forEach((div) => {

      const hasGradient =
        div.className.includes('gradient') ||
        div.className.includes('bg-gradient') ||
        div.className.includes('from-');

      if (hasGradient) {

        div.style.setProperty(
          'background',
          `linear-gradient(225deg, ${settings.gradientColor}, ${settings.accentColor})`,
          'important'
        );

        div.style.setProperty(
          'background-image',
          `linear-gradient(225deg, ${settings.gradientColor}, ${settings.accentColor})`,
          'important'
        );
      }
    });
  }

  const sidebar =
    document.querySelector(
      '[class*="border-r"]'
    ) ||
    document.querySelector(
      '[class*="w-56"]'
    ) ||
    document.querySelector(
      '[class*="w-60"]'
    );

  if (sidebar) {

    sidebar.style.setProperty(
      'background',
      `linear-gradient(180deg, ${settings.gradientColor}, ${settings.accentColor})`,
      'important'
    );

    sidebar.style.setProperty(
      'background-image',
      `linear-gradient(180deg, ${settings.gradientColor}, ${settings.accentColor})`,
      'important'
    );
  }
}

function applyTheme(settings) {

  const oldStyle =
    document.getElementById(
      'claude-reflow-styles'
    );

  if (oldStyle) {
    oldStyle.remove();
  }

  const style =
    document.createElement('style');

  style.id =
    'claude-reflow-styles';

  const contrastText =
    getContrastColor(
      settings.accentColor
    );

  style.textContent = `

    :root {

      --cr-accent:
        ${settings.accentColor};

      --cr-sidebar-bg:
        ${settings.sidebarBg};

      --cr-text:
        ${settings.textColor};

      --cr-gradient:
        ${settings.gradientColor};

      --cr-svg:
        ${settings.svgColor};

      --cr-reflow-menu-text:
        ${settings.reflowMenuTextColor};

      --cr-user-msg-bg:
        ${settings.userMessageBg};

      --cr-input-bg:
        ${settings.inputBoxBg};

      --cr-input-border:
        ${settings.inputBoxBorder};

      --cr-input-text:
        ${settings.inputBoxText};

      --cr-reflow-btn:
        ${settings.reflowButtonColor};

      --cr-message-input-bg:
        ${settings.messageInputBg};

      --cr-chat-bg:
        ${settings.chatBg};

      --cr-hover-text:
        ${settings.hoverTextColor};
    }

    div[class*="sticky"][class*="top-0"][class*="h-screen"],
    div[class*="w-56"],
    div[class*="w-60"],
    div[class*="border-r"] {

      background:
        linear-gradient(225deg, ${settings.gradientColor}, ${settings.accentColor}) !important;

      color:
        var(--cr-text) !important;

      overflow: visible !important;

      transition:
        background 0.25s ease,
        width 0.25s ease !important;
    }

    div[class*="border-r"] *,
    div[class*="w-56"] *,
    div[class*="w-60"] * {

      color:
        var(--cr-text) !important;
    }

    div[class*="user-message"],
    div[class*="user"][class*="rounded"][class*="bg-"],
    [role="article"][class*="user"] {

      background:
        ${settings.userMessageBg} !important;
    }

    svg[class*="logo"],
    svg[aria-label*="Claude"],
    div[class*="sidebar"] svg:first-child {

      color:
        var(--cr-gradient) !important;

      fill:
        var(--cr-gradient) !important;

      stroke:
        var(--cr-gradient) !important;
    }

    svg:not([class*="logo"]):not([aria-label*="Claude"]),
    svg:not([class*="logo"]):not([aria-label*="Claude"]) * {

      stroke:
        var(--cr-svg) !important;

      fill:
        var(--cr-svg) !important;
    }

    svg[class*="animate"],
    svg[class*="spinner"],
    svg[class*="loading"],
    div[class*="thinking"] svg,
    circle,
    path,
    line,
    rect {

      stroke:
        var(--cr-svg) !important;

      fill:
        var(--cr-svg) !important;
    }

    /* Anthropicons-Variable icon font glyphs (message action row, toolbar
       buttons, etc.) render as text, not <svg>, so they need their color
       set directly instead of stroke/fill */
    [data-cds="Icon"] {

      color:
        var(--cr-svg) !important;
    }

    button {

      transition:
        background 0.2s ease,
        color 0.2s ease,
        border-color 0.2s ease,
        transform 0.2s ease !important;
    }

    button:hover {
      transform: translateY(-1px);
    }

    button:not(#claude-pro-close-btn)[class*="bg-accent"],
    button:not(#claude-pro-close-btn)[class*="bg-primary"] {

      background:
        var(--cr-accent) !important;

      color:
        ${contrastText} !important;

      border: none !important;
    }

    a[data-dd-action-name="sidebar-chat-item"]:hover,
    a[data-dd-action-name="sidebar-chat-item"]:hover *,
    a[data-dd-action-name="sidebar-project-item"]:hover,
    a[data-dd-action-name="sidebar-project-item"]:hover *,
    a[data-dd-action-name="sidebar-nav-item"]:hover,
    a[data-dd-action-name="sidebar-nav-item"]:hover *,
    a[data-dd-action-name="sidebar-new-item"]:hover,
    a[data-dd-action-name="sidebar-new-item"]:hover * {

      color:
        var(--cr-hover-text) !important;
    }

    a:hover {

      color:
        var(--cr-accent) !important;
    }

    button[data-testid="user-menu-button"]:hover {

      background:
        var(--cr-accent) !important;
    }

    /* User menu button (avatar + plan name at bottom of sidebar) had no
       ReFlow coverage at all, so on hover it fell back to Claude's own
       default black hover background instead of the accent color */
    button[data-testid="user-menu-button"]:hover {

      background:
        var(--cr-accent) !important;
    }

    button svg,
    nav svg:not([class*="logo"]) {

      color:
        var(--cr-text) !important;

      stroke:
        var(--cr-text) !important;
    }

    /* Target Claude's send button via parent class */
    ._claude_10ocf_159 button[aria-label="Send message"] {

      background:
        hsl(var(--brand-000)) !important;

      color:
        var(--text-primary) !important;

      border: none !important;
    }

    ._claude_10ocf_159 button[aria-label="Send message"]:hover {

      background:
        hsl(var(--brand-200)) !important;

      color:
        var(--text-primary) !important;
    }

    ._claude_10ocf_159 button[aria-label="Send message"] svg {

      stroke:
        var(--text-primary) !important;

      fill:
        var(--text-primary) !important;

      color:
        var(--text-primary) !important;
    }

    main:not([role="dialog"] *),
    [role="main"]:not([role="dialog"] *),
    div[class*="flex-col"][class*="h-full"]:not([role="dialog"] *),
    div[class*="flex-col"][class*="w-full"]:not([role="dialog"] *) {

      background:
        ${settings.chatBg} !important;
    }

    [data-disclaimer="true"],
    div[class*="footer"],
    div[class*="text-sm"][class*="text-center"],
    div[class*="py-"][class*="border-t"] {

      background:
        ${settings.chatBg} !important;
    }

    /* Hide the temporary grid-pattern gradient overlay shown while responding */
    div[aria-hidden="true"][class*="32px_32px"] {

      display: none !important;
    }

    /* Hide the "Quick answer" gradient bar that fades in above the composer */
    div[data-testid="answer-now-above-composer"] {

      display: none !important;
    }

    div[class*="user-message"],
    div[class*="rounded"][class*="bg-"],
    [role="article"] {

      background:
        var(--cr-chat-bg) !important;
    }

    /* The compose box also matches the rule above (rounded + bg- classes),
       so re-apply User Message Background specifically to it here, since
       it's more specific and will win over the general rule. */
    div[data-chat-input-container="true"] [class*="rounded"][class*="bg-"] {

      background:
        var(--cr-user-msg-bg) !important;
    }

    textarea,
    input[type="text"]:not([class*="claude-pro"]),
    div[contenteditable="true"],
    [class*="input"]:not([class*="claude-pro"]),
    [class*="compose"]:not([class*="claude-pro"]) {

      background:
        var(--cr-input-bg) !important;

      border:
        1px solid var(--cr-input-border) !important;

      color:
        var(--cr-input-text) !important;
    }

    textarea:focus,
    input[type="text"]:not([class*="claude-pro"]):focus,
    div[contenteditable="true"]:focus,
    [class*="input"]:not([class*="claude-pro"]):focus,
    [class*="compose"]:not([class*="claude-pro"]):focus {

      border-color:
        var(--cr-input-border) !important;

      outline: none !important;

      box-shadow:
        0 0 0 2px rgba(127, 119, 221, 0.2) !important;
    }

    #claude-pro-settings-panel {

      position: fixed;

      top: 0;
      right: 0;

      width: 380px;
      height: 100vh;

      background: #161616;

      border-left:
        1px solid rgba(255,255,255,0.08);

      z-index: 999999;

      overflow-y: auto;

      animation:
        claudeReflowSlideIn 0.2s ease;

      box-shadow:
        -10px 0 30px rgba(0,0,0,0.4);
    }

    @keyframes claudeReflowSlideIn {

      from {

        transform:
          translateX(100%);

        opacity: 0;
      }

      to {

        transform:
          translateX(0);

        opacity: 1;
      }
    }

    .claude-pro-settings-header {

      display: flex;

      align-items: center;

      justify-content: space-between;

      padding: 20px;

      border-bottom:
        1px solid rgba(255,255,255,0.08);
    }

    .claude-pro-settings-header h2 {

      margin: 0;

      font-size: 18px;
      font-weight: 600;

      color:
        var(--cr-reflow-menu-text);
    }

    .claude-pro-close-btn {

      width: 34px;
      height: 34px;

      border: none;
      border-radius: 10px;

      background: transparent;

      color:
        var(--cr-reflow-menu-text);

      cursor: pointer;

      font-size: 22px;
    }

    .claude-pro-close-btn:hover {

      background:
        rgba(255,255,255,0.08);
    }

    .claude-pro-settings-content {

      padding: 20px;
    }

    .claude-pro-setting-group {

      margin-bottom: 24px;
    }

    .claude-pro-label {

      display: block;

      margin-bottom: 8px;

      font-size: 11px;
      font-weight: 700;

      text-transform: uppercase;

      color:
        var(--cr-reflow-menu-text);
    }

    .claude-pro-color-input-group {

      display: flex;

      gap: 10px;

      align-items: center;
    }

    .claude-pro-color-picker {

      width: 48px;
      height: 40px;

      border-radius: 8px;

      border:
        1px solid rgba(255,255,255,0.08);

      cursor: pointer;
    }

    .claude-pro-hex-input {

      flex: 1;

      padding: 10px 12px;

      background:
        rgba(255,255,255,0.04);

      border:
        1px solid rgba(255,255,255,0.08);

      border-radius: 8px;

      color: white;

      font-family: monospace;
    }

    .claude-pro-button {

      width: 100%;

      padding: 11px 14px;

      border: none;
      border-radius: 10px;

      background:
        var(--cr-accent);

      color:
        ${contrastText};

      cursor: pointer;

      font-size: 13px;
      font-weight: 600;
    }

    .claude-pro-status {

      display: none;

      margin-bottom: 16px;

      padding: 12px;

      border-radius: 10px;

      background:
        rgba(76,175,80,0.1);

      border:
        1px solid rgba(76,175,80,0.2);

      color: #4caf50;

      font-size: 12px;
    }

    .claude-pro-status.show {
      display: block;
    }

    .claude-pro-theme-presets {

      padding: 20px;

      border-bottom:
        1px solid rgba(255,255,255,0.08);
    }

    .claude-pro-preset-buttons {

      display: grid;

      grid-template-columns: 1fr 1fr;

      gap: 10px;

      margin-top: 10px;
    }

    .claude-pro-preset-btn {

      padding: 10px 12px;

      border: 1px solid rgba(255,255,255,0.12);

      border-radius: 8px;

      background: rgba(255,255,255,0.04);

      color: var(--cr-reflow-menu-text);

      cursor: pointer;

      font-size: 12px;

      font-weight: 500;

      transition: all 0.2s ease;
    }

    .claude-pro-preset-btn:hover {

      background: rgba(255,255,255,0.08);

      border-color: var(--cr-accent);
    }

    .claude-pro-preset-btn.active {

      background: var(--cr-accent);

      color: ${contrastText};

      border-color: var(--cr-accent);
    }

    #claude-pro-settings-btn {

      width: calc(100% - 16px);

      min-height: 44px;

      margin: 8px;

      padding: 10px 12px;

      border-radius: 12px;

      border:
        1px solid rgba(255,255,255,0.08);

      background:
        rgba(255,255,255,0.04);

      color: white;

      cursor: pointer;

      font-size: 13px;
      font-weight: 600;

      display: flex;

      align-items: center;

      justify-content: center;

      gap: 8px;

      overflow: hidden;

      white-space: nowrap;

      flex-shrink: 0;

      box-sizing: border-box;
    }

    #claude-pro-settings-btn.collapsed {

      width: 44px !important;

      min-width: 44px !important;

      height: 44px !important;

      padding: 0 !important;

      margin: 8px auto !important;

      gap: 0 !important;
    }

    #claude-pro-settings-btn.collapsed .button-label {

      display: none !important;
    }

    #claude-pro-settings-btn .gear-icon {

      display: flex;

      align-items: center;

      justify-content: center;

      font-size: 16px;
    }

    #claude-pro-settings-btn .gear-icon svg {

      width: 1em;

      height: 1em;

      flex-shrink: 0;
    }

    .claude-pro-icon-style-btn svg {

      width: 14px;

      height: 14px;

      vertical-align: middle;

      margin-right: 4px;
    }

  `;

  document.head.appendChild(style);
}

function setupThemePresets() {

  const presetButtons =
    document.querySelectorAll(
      '.claude-pro-preset-btn'
    );

  presetButtons.forEach((btn) => {

    btn.addEventListener(
      'click',
      () => {

        const themeName =
          btn.getAttribute(
            'data-theme'
          );

        const theme =
          THEME_PRESETS[themeName];

        if (!theme) return;

        document.getElementById(
          'claude-pro-accent-color'
        ).value =
          theme.accentColor;

        document.getElementById(
          'claude-pro-accent-hex'
        ).value =
          theme.accentColor;

        document.getElementById(
          'claude-pro-bg-color'
        ).value =
          theme.sidebarBg;

        document.getElementById(
          'claude-pro-bg-hex'
        ).value =
          theme.sidebarBg;

        document.getElementById(
          'claude-pro-text-color'
        ).value =
          theme.textColor;

        document.getElementById(
          'claude-pro-text-hex'
        ).value =
          theme.textColor;

        document.getElementById(
          'claude-pro-logo-color'
        ).value =
          theme.gradientColor;

        document.getElementById(
          'claude-pro-logo-hex'
        ).value =
          theme.gradientColor;

        document.getElementById(
          'claude-pro-svg-color'
        ).value =
          theme.svgColor;

        document.getElementById(
          'claude-pro-svg-hex'
        ).value =
          theme.svgColor;

        document.getElementById(
          'claude-pro-settings-text-color'
        ).value =
          theme.reflowMenuTextColor;

        document.getElementById(
          'claude-pro-settings-text-hex'
        ).value =
          theme.reflowMenuTextColor;

        document.getElementById(
          'claude-pro-user-msg-color'
        ).value =
          theme.userMessageBg;

        document.getElementById(
          'claude-pro-user-msg-hex'
        ).value =
          theme.userMessageBg;

        document.getElementById(
          'claude-pro-input-bg-color'
        ).value =
          theme.inputBoxBg;

        document.getElementById(
          'claude-pro-input-bg-hex'
        ).value =
          theme.inputBoxBg;

        document.getElementById(
          'claude-pro-input-border-color'
        ).value =
          theme.inputBoxBorder;

        document.getElementById(
          'claude-pro-input-border-hex'
        ).value =
          theme.inputBoxBorder;

        document.getElementById(
          'claude-pro-input-text-color'
        ).value =
          theme.inputBoxText;

        document.getElementById(
          'claude-pro-input-text-hex'
        ).value =
          theme.inputBoxText;

        document.getElementById(
          'claude-pro-chat-bg-color'
        ).value =
          theme.chatBg;

        document.getElementById(
          'claude-pro-chat-bg-hex'
        ).value =
          theme.chatBg;

        document.getElementById(
          'claude-pro-hover-text-color'
        ).value =
          theme.hoverTextColor;

        document.getElementById(
          'claude-pro-hover-text-hex'
        ).value =
          theme.hoverTextColor;

        presetButtons.forEach((b) => {
          b.classList.remove('active');
        });

        btn.classList.add('active');

        window.saveClaudeProSettings();
      }
    );
  });
}

function setupColorInputs() {

  const colorPairs = [

    {
      colorInput:
        'claude-pro-accent-color',

      hexInput:
        'claude-pro-accent-hex'
    },

    {
      colorInput:
        'claude-pro-bg-color',

      hexInput:
        'claude-pro-bg-hex'
    },

    {
      colorInput:
        'claude-pro-text-color',

      hexInput:
        'claude-pro-text-hex'
    },

    {
      colorInput:
        'claude-pro-logo-color',

      hexInput:
        'claude-pro-logo-hex'
    },

    {
      colorInput:
        'claude-pro-svg-color',

      hexInput:
        'claude-pro-svg-hex'
    },

    {
      colorInput:
        'claude-pro-settings-text-color',

      hexInput:
        'claude-pro-settings-text-hex'
    },

    {
      colorInput:
        'claude-pro-user-msg-color',

      hexInput:
        'claude-pro-user-msg-hex'
    },

    {
      colorInput:
        'claude-pro-chat-bg-color',

      hexInput:
        'claude-pro-chat-bg-hex'
    },

    {
      colorInput:
        'claude-pro-hover-text-color',

      hexInput:
        'claude-pro-hover-text-hex'
    },

    {
      colorInput:
        'claude-pro-input-bg-color',

      hexInput:
        'claude-pro-input-bg-hex'
    },

    {
      colorInput:
        'claude-pro-input-border-color',

      hexInput:
        'claude-pro-input-border-hex'
    },

    {
      colorInput:
        'claude-pro-input-text-color',

      hexInput:
        'claude-pro-input-text-hex'
    }
  ];

  colorPairs.forEach(
    ({ colorInput, hexInput }) => {

      const colorElem =
        document.getElementById(
          colorInput
        );

      const hexElem =
        document.getElementById(
          hexInput
        );

      if (!colorElem || !hexElem) {
        return;
      }

      colorElem.addEventListener(
        'input',
        (e) => {

          hexElem.value =
            e.target.value;
        }
      );

      hexElem.addEventListener(
        'input',
        (e) => {

          let hex =
            e.target.value.toUpperCase();

          if (
            hex &&
            !hex.startsWith('#')
          ) {
            hex = '#' + hex;
          }

          if (
            /^#[0-9A-F]{6}$/.test(hex)
          ) {
            colorElem.value = hex;
          }
        }
      );
    }
  );
}

function createSettingsPanel() {

  const existingPanel =
    document.getElementById(
      'claude-pro-settings-panel'
    );

  if (existingPanel) {
    existingPanel.remove();
    return;
  }

  chrome.storage.sync.get(
    DEFAULT_SETTINGS,
    (settings) => {

      const panel =
        document.createElement('div');

      panel.id =
        'claude-pro-settings-panel';

      panel.innerHTML = `

        <div class="claude-pro-settings-header">

          <h2>Claude ReFlow</h2>

          <button
            class="claude-pro-close-btn"
            id="claude-pro-close-btn"
          >
            &times;
          </button>

        </div>

        <div class="claude-pro-theme-presets">

          <label class="claude-pro-label">Quick themes</label>

          <div class="claude-pro-preset-buttons">

            <button class="claude-pro-preset-btn" data-theme="ReFlow Default">
              ReFlow Default
            </button>

            <button class="claude-pro-preset-btn" data-theme="Monotone">
              Monotone
            </button>

            <button class="claude-pro-preset-btn" data-theme="Midnight">
              Midnight
            </button>

            <button class="claude-pro-preset-btn" data-theme="Sunset">
              Sunset
            </button>

          </div>

        </div>

        <div class="claude-pro-theme-presets">

          <label class="claude-pro-label">Button icon</label>

          <div class="claude-pro-preset-buttons">

            <button
              class="claude-pro-preset-btn claude-pro-icon-style-btn${settings.reflowIconStyle === 'logo' ? '' : ' active'}"
              data-icon-style="gear"
            >
             Gear
            </button>

            <button
              class="claude-pro-preset-btn claude-pro-icon-style-btn${settings.reflowIconStyle === 'logo' ? ' active' : ''}"
              data-icon-style="logo"
            >
             ReFlow Wave
            </button>

          </div>

        </div>

        <div class="claude-pro-theme-presets">

          <label class="claude-pro-label">Button label</label>

          <div class="claude-pro-preset-buttons">

            <button
              class="claude-pro-preset-btn claude-pro-label-style-btn${settings.reflowLabelStyle === 'short' ? '' : ' active'}"
              data-label-style="full"
            >
              Claude ReFlow
            </button>

            <button
              class="claude-pro-preset-btn claude-pro-label-style-btn${settings.reflowLabelStyle === 'short' ? ' active' : ''}"
              data-label-style="short"
            >
              ReFlow
            </button>

          </div>

        </div>

        <div class="claude-pro-settings-content">

          <div
            id="claude-pro-status"
            class="claude-pro-status"
          ></div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Accent color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-accent-color"
                class="claude-pro-color-picker"
                value="${settings.accentColor}"
              >

              <input
                type="text"
                id="claude-pro-accent-hex"
                class="claude-pro-hex-input"
                value="${settings.accentColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Sidebar background
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-bg-color"
                class="claude-pro-color-picker"
                value="${settings.sidebarBg}"
              >

              <input
                type="text"
                id="claude-pro-bg-hex"
                class="claude-pro-hex-input"
                value="${settings.sidebarBg}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Text color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-text-color"
                class="claude-pro-color-picker"
                value="${settings.textColor}"
              >

              <input
                type="text"
                id="claude-pro-text-hex"
                class="claude-pro-hex-input"
                value="${settings.textColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Gradient color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-logo-color"
                class="claude-pro-color-picker"
                value="${settings.gradientColor}"
              >

              <input
                type="text"
                id="claude-pro-logo-hex"
                class="claude-pro-hex-input"
                value="${settings.gradientColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              SVG color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-svg-color"
                class="claude-pro-color-picker"
                value="${settings.svgColor}"
              >

              <input
                type="text"
                id="claude-pro-svg-hex"
                class="claude-pro-hex-input"
                value="${settings.svgColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Reflow menu text color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-settings-text-color"
                class="claude-pro-color-picker"
                value="${settings.reflowMenuTextColor}"
              >

              <input
                type="text"
                id="claude-pro-settings-text-hex"
                class="claude-pro-hex-input"
                value="${settings.reflowMenuTextColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              User message background
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-user-msg-color"
                class="claude-pro-color-picker"
                value="${settings.userMessageBg}"
              >

              <input
                type="text"
                id="claude-pro-user-msg-hex"
                class="claude-pro-hex-input"
                value="${settings.userMessageBg}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Chat background
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-chat-bg-color"
                class="claude-pro-color-picker"
                value="${settings.chatBg}"
              >

              <input
                type="text"
                id="claude-pro-chat-bg-hex"
                class="claude-pro-hex-input"
                value="${settings.chatBg}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Sidebar hover text color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-hover-text-color"
                class="claude-pro-color-picker"
                value="${settings.hoverTextColor}"
              >

              <input
                type="text"
                id="claude-pro-hover-text-hex"
                class="claude-pro-hex-input"
                value="${settings.hoverTextColor}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Input box background
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-input-bg-color"
                class="claude-pro-color-picker"
                value="${settings.inputBoxBg}"
              >

              <input
                type="text"
                id="claude-pro-input-bg-hex"
                class="claude-pro-hex-input"
                value="${settings.inputBoxBg}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Input box border
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-input-border-color"
                class="claude-pro-color-picker"
                value="${settings.inputBoxBorder}"
              >

              <input
                type="text"
                id="claude-pro-input-border-hex"
                class="claude-pro-hex-input"
                value="${settings.inputBoxBorder}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <label class="claude-pro-label">
              Input box text color
            </label>

            <div class="claude-pro-color-input-group">

              <input
                type="color"
                id="claude-pro-input-text-color"
                class="claude-pro-color-picker"
                value="${settings.inputBoxText}"
              >

              <input
                type="text"
                id="claude-pro-input-text-hex"
                class="claude-pro-hex-input"
                value="${settings.inputBoxText}"
              >

            </div>
          </div>

          <div class="claude-pro-setting-group">

            <button
              class="claude-pro-button"
              id="claude-pro-export-btn"
              style="margin-bottom: 8px;"
            >
              📥 Export preset
            </button>

            <button
              class="claude-pro-button"
              id="claude-pro-import-btn"
              style="margin-bottom: 8px;"
            >
              📤 Import preset
            </button>

            <button
              class="claude-pro-button"
              id="claude-pro-save-btn"
            >
              Save settings
            </button>

            <button
              class="claude-pro-button"
              id="claude-pro-replay-onboarding-btn"
              style="margin-top: 8px;"
            >
             Replay welcome guide
            </button>

          </div>

        </div>
      `;

      document.body.appendChild(panel);

      document
        .getElementById(
          'claude-pro-close-btn'
        )
        .addEventListener(
          'click',
          () => {
            panel.remove();
          }
        );

      document
        .getElementById(
          'claude-pro-export-btn'
        )
        .addEventListener(
          'click',
          exportPreset
        );

      document
        .getElementById(
          'claude-pro-import-btn'
        )
        .addEventListener(
          'click',
          importPreset
        );

      document
        .getElementById(
          'claude-pro-replay-onboarding-btn'
        )
        .addEventListener(
          'click',
          () => {

            panel.remove();

            showOnboardingModal();
          }
        );

      document
        .getElementById(
          'claude-pro-save-btn'
        )
        .addEventListener(
          'click',
          saveClaudeProSettings
        );

      setupColorInputs();

      setupThemePresets();

      setupIconStyleToggle();

      setupLabelStyleToggle();
    }
  );
}

function setupLabelStyleToggle() {

  const labelButtons =
    document.querySelectorAll(
      '.claude-pro-label-style-btn'
    );

  labelButtons.forEach((btn) => {

    btn.addEventListener(
      'click',
      () => {

        const labelStyle =
          btn.getAttribute(
            'data-label-style'
          );

        labelButtons.forEach((b) =>
          b.classList.remove('active')
        );

        btn.classList.add('active');

        currentSettings = {
          ...currentSettings,
          reflowLabelStyle: labelStyle
        };

        chrome.storage.sync.set(
          { reflowLabelStyle: labelStyle },
          () => {

            updateSettingsButtonLabel(
              labelStyle
            );

            showClaudeProStatus(
              'Label updated!'
            );
          }
        );
      }
    );
  });
}

function setupIconStyleToggle() {

  const iconButtons =
    document.querySelectorAll(
      '.claude-pro-icon-style-btn'
    );

  iconButtons.forEach((btn) => {

    btn.addEventListener(
      'click',
      () => {

        const iconStyle =
          btn.getAttribute(
            'data-icon-style'
          );

        iconButtons.forEach((b) =>
          b.classList.remove('active')
        );

        btn.classList.add('active');

        currentSettings = {
          ...currentSettings,
          reflowIconStyle: iconStyle
        };

        chrome.storage.sync.set(
          { reflowIconStyle: iconStyle },
          () => {

            updateSettingsButtonIcon(
              iconStyle
            );

            showClaudeProStatus(
              'Icon updated!'
            );
          }
        );
      }
    );
  });
}

function showClaudeProStatus(message) {

  const statusElem =
    document.getElementById(
      'claude-pro-status'
    );

  if (!statusElem) return;

  statusElem.textContent = message;

  statusElem.classList.add('show');

  setTimeout(() => {

    statusElem.classList.remove('show');

  }, 3000);
}

window.exportPreset = function () {

  const settings = {
    accentColor:
      document.getElementById(
        'claude-pro-accent-color'
      ).value,

    sidebarBackground:
      document.getElementById(
        'claude-pro-bg-color'
      ).value,

    textColor:
      document.getElementById(
        'claude-pro-text-color'
      ).value,

    gradientColor:
      document.getElementById(
        'claude-pro-logo-color'
      ).value,

    svgColor:
      document.getElementById(
        'claude-pro-svg-color'
      ).value,

    reflowMenuTextColor:
      document.getElementById(
        'claude-pro-settings-text-color'
      ).value,

    userMessageBackground:
      document.getElementById(
        'claude-pro-user-msg-color'
      ).value,

    userMessageBg:
      document.getElementById(
        'claude-pro-user-msg-color'
      ).value,

    chatBg:
      document.getElementById(
        'claude-pro-chat-bg-color'
      ).value,

    hoverTextColor:
      document.getElementById(
        'claude-pro-hover-text-color'
      ).value,

    inputBoxBackground:
      document.getElementById(
        'claude-pro-input-bg-color'
      ).value,

    inputBoxBorder:
      document.getElementById(
        'claude-pro-input-border-color'
      ).value,

    inputBoxTextColor:
      document.getElementById(
        'claude-pro-input-text-color'
      ).value
  };

  const presetName =
    prompt(
      'Enter preset name:',
      'My Custom Preset'
    );

  if (!presetName) return;

  const presetDescription =
    prompt(
      'Enter preset description (optional):',
      ''
    );

  const preset = {
    colors: settings,
    name: presetName,
    description: presetDescription || ''
  };

  const dataStr =
    JSON.stringify(preset, null, 2);

  const dataBlob =
    new Blob(
      [dataStr],
      { type: 'application/json' }
    );

  const url =
    URL.createObjectURL(dataBlob);

  const link =
    document.createElement('a');

  link.href = url;

  link.download =
    `${presetName.replace(/\s+/g, '-')}.json`;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  URL.revokeObjectURL(url);

  showClaudeProStatus(
    'Preset exported!'
  );
};

window.importPreset = function () {

  const input =
    document.createElement('input');

  input.type = 'file';

  input.accept = '.json';

  input.addEventListener(
    'change',
    (e) => {

      const file = e.target.files[0];

      if (!file) return;

      const reader =
        new FileReader();

      reader.onload = (event) => {

        try {

          const preset =
            JSON.parse(
              event.target.result
            );

          if (
            !preset.colors ||
            typeof preset.colors !==
              'object'
          ) {

            showClaudeProStatus(
              'Invalid preset format!'
            );

            return;
          }

          const { colors } = preset;

          document.getElementById(
            'claude-pro-accent-color'
          ).value =
            colors.accentColor || '';

          document.getElementById(
            'claude-pro-bg-color'
          ).value =
            colors.sidebarBackground || '';

          document.getElementById(
            'claude-pro-text-color'
          ).value =
            colors.textColor || '';

          document.getElementById(
            'claude-pro-logo-color'
          ).value =
            colors.gradientColor || '';

          document.getElementById(
            'claude-pro-svg-color'
          ).value =
            colors.svgColor || '';

          document.getElementById(
            'claude-pro-settings-text-color'
          ).value =
            colors.reflowMenuTextColor || '';

          document.getElementById(
            'claude-pro-user-msg-color'
          ).value =
            colors.userMessageBackground || colors.userMessageBg || '';

          document.getElementById(
            'claude-pro-chat-bg-color'
          ).value =
            colors.chatBg || '';

          document.getElementById(
            'claude-pro-hover-text-color'
          ).value =
            colors.hoverTextColor || '';

          document.getElementById(
            'claude-pro-input-bg-color'
          ).value =
            colors.inputBoxBackground || '';

          document.getElementById(
            'claude-pro-input-border-color'
          ).value =
            colors.inputBoxBorder || '';

          document.getElementById(
            'claude-pro-input-text-color'
          ).value =
            colors.inputBoxTextColor || '';

          setupColorInputs();

          showClaudeProStatus(
            `Preset "${preset.name}" imported!`
          );

        } catch (error) {

          showClaudeProStatus(
            'Failed to parse preset file!'
          );
        }
      };

      reader.readAsText(file);
    }
  );

  input.click();
};

window.saveClaudeProSettings = function () {

  const settings = {

    accentColor:
      document.getElementById(
        'claude-pro-accent-color'
      ).value,

    sidebarBg:
      document.getElementById(
        'claude-pro-bg-color'
      ).value,

    textColor:
      document.getElementById(
        'claude-pro-text-color'
      ).value,

    gradientColor:
      document.getElementById(
        'claude-pro-logo-color'
      ).value,

    svgColor:
      document.getElementById(
        'claude-pro-svg-color'
      ).value,

    reflowMenuTextColor:
      document.getElementById(
        'claude-pro-settings-text-color'
      ).value,

    userMessageBg:
      document.getElementById(
        'claude-pro-user-msg-color'
      ).value,

    chatBg:
      document.getElementById(
        'claude-pro-chat-bg-color'
      ).value,

    hoverTextColor:
      document.getElementById(
        'claude-pro-hover-text-color'
      ).value,

    inputBoxBg:
      document.getElementById(
        'claude-pro-input-bg-color'
      ).value,

    inputBoxBorder:
      document.getElementById(
        'claude-pro-input-border-color'
      ).value,

    inputBoxText:
      document.getElementById(
        'claude-pro-input-text-color'
      ).value,

    sidebarWidth: 240
  };

  chrome.storage.sync.set(
    settings,
    () => {

      currentSettings = settings;

      localStorage.setItem(
        'claude-reflow-settings',
        JSON.stringify(settings)
      );

      applyTheme(settings);

      applyBannerGradient(settings);

      showClaudeProStatus(
        'Settings saved!'
      );
    }
  );
};

function getIconMarkup(iconStyle) {

  return iconStyle === 'logo'
    ? REFLOW_WAVE_SVG
    : '⚙️';
}

function getLabelText(labelStyle) {

  return REFLOW_LABEL_TEXT[labelStyle] ||
    REFLOW_LABEL_TEXT.full;
}

function addSettingsButton() {

  const sidebar =
    document.querySelector(
      '[class*="border-r"]'
    ) ||
    document.querySelector(
      '[class*="w-56"]'
    ) ||
    document.querySelector(
      '[class*="w-60"]'
    );

  if (!sidebar) return;

  let settingsBtn =
    document.getElementById(
      'claude-pro-settings-btn'
    );

  if (!settingsBtn) {

    settingsBtn =
      document.createElement('button');

    settingsBtn.id =
      'claude-pro-settings-btn';

    settingsBtn.innerHTML = `
      <span class="gear-icon">
        ${getIconMarkup(currentSettings.reflowIconStyle)}
      </span>

      <span class="button-label">
        ${getLabelText(currentSettings.reflowLabelStyle)}
      </span>
    `;

    settingsBtn.addEventListener(
      'click',
      createSettingsPanel
    );

    sidebar.appendChild(settingsBtn);
  }

  settingsBtn.style.marginTop =
    'auto';
}

function updateSettingsButtonIcon(iconStyle) {

  const settingsBtn =
    document.getElementById(
      'claude-pro-settings-btn'
    );

  if (!settingsBtn) return;

  const iconSpan =
    settingsBtn.querySelector(
      '.gear-icon'
    );

  if (iconSpan) {
    iconSpan.innerHTML =
      getIconMarkup(iconStyle);
  }
}

function updateSettingsButtonLabel(labelStyle) {

  const settingsBtn =
    document.getElementById(
      'claude-pro-settings-btn'
    );

  if (!settingsBtn) return;

  const labelSpan =
    settingsBtn.querySelector(
      '.button-label'
    );

  if (labelSpan) {
    labelSpan.textContent =
      getLabelText(labelStyle);
  }
}

function updateCollapsedButtonState() {

  const settingsBtn =
    document.getElementById(
      'claude-pro-settings-btn'
    );

  if (!settingsBtn) return;

  const sidebar =
    settingsBtn.closest(
      '[class*="border-r"]'
    );

  if (!sidebar) return;

  const width =
    sidebar.offsetWidth;

  if (width < 100) {

    settingsBtn.classList.add(
      'collapsed'
    );

  } else {

    settingsBtn.classList.remove(
      'collapsed'
    );
  }

  const avatars =
    sidebar.querySelectorAll('img');

  avatars.forEach((avatar) => {

    avatar.style.minWidth =
      '32px';

    avatar.style.minHeight =
      '32px';

    avatar.style.flexShrink =
      '0';
  });

  sidebar.style.overflow =
    'visible';
}

function showOnboardingModal() {

  const overlay =
    document.createElement('div');

  overlay.id =
    'reflow-onboarding-overlay';

  overlay.style.position =
    'fixed';

  overlay.style.top =
    '0';

  overlay.style.left =
    '0';

  overlay.style.width =
    '100%';

  overlay.style.height =
    '100%';

  overlay.style.background =
    'rgba(0, 0, 0, 0.6)';

  overlay.style.zIndex =
    '999999';

  overlay.style.display =
    'flex';

  overlay.style.alignItems =
    'center';

  overlay.style.justifyContent =
    'center';

  const modal =
    document.createElement('div');

  modal.id =
    'reflow-onboarding-modal';

  modal.style.background =
    '#121212';

  modal.style.border =
    '1px solid #6841a3';

  modal.style.borderRadius =
    '12px';

  modal.style.padding =
    '24px';

  modal.style.maxWidth =
    '380px';

  modal.style.width =
    '90%';

  modal.style.color =
    '#ffffff';

  modal.style.fontFamily =
    'inherit';

  modal.style.boxShadow =
    '0 8px 32px rgba(0, 0, 0, 0.5)';

  const title =
    document.createElement('h2');

  title.textContent =
    'Welcome to Claude ReFlow';

  title.style.margin =
    '0 0 12px 0';

  title.style.fontSize =
    '18px';

  title.style.color =
    '#c14ad7';

  const intro =
    document.createElement('p');

  intro.textContent =
    'Here are a few things to get you started:';

  intro.style.margin =
    '0 0 16px 0';

  intro.style.fontSize =
    '14px';

  intro.style.color =
    '#dddddd';

  const list =
    document.createElement('ul');

  list.style.margin =
    '0 0 20px 0';

  list.style.paddingLeft =
    '18px';

  list.style.fontSize =
    '14px';

  list.style.color =
    '#dddddd';

  list.style.lineHeight =
    '1.6';

  const items = [
    'ReFlow settings button: open the sidebar gear icon to access theming controls.',
    'Color controls: adjust accent, background, and text colors with the pickers.',
    'Presets: use export/import to save or share your theme setup.'
  ];

  items.forEach((text) => {

    const li =
      document.createElement('li');

    li.textContent =
      text;

    list.appendChild(li);
  });

  const closeButton =
    document.createElement('button');

  closeButton.textContent =
    'Ok';

  closeButton.style.background =
    '#c14ad7';

  closeButton.style.color =
    '#ffffff';

  closeButton.style.border =
    'none';

  closeButton.style.borderRadius =
    '8px';

  closeButton.style.padding =
    '10px 16px';

  closeButton.style.fontSize =
    '14px';

  closeButton.style.cursor =
    'pointer';

  closeButton.style.width =
    '100%';

  closeButton.addEventListener(
    'click',
    () => {

      chrome.storage.sync.set(
        {
          reflowOnboardingSeen: true
        }
      );

      overlay.remove();
    }
  );

  modal.appendChild(title);

  modal.appendChild(intro);

  modal.appendChild(list);

  modal.appendChild(closeButton);

  overlay.appendChild(modal);

  document.body.appendChild(overlay);
}

function initializeClaudeReflow() {

  chrome.storage.sync.get(
    DEFAULT_SETTINGS,
    (settings) => {

      currentSettings = settings;

      applyTheme(settings);

      applyBannerGradient(settings);

      addSettingsButton();

      updateCollapsedButtonState();

      chrome.storage.sync.get(
        {
          reflowOnboardingSeen: false
        },
        (onboardingState) => {

          if (!onboardingState.reflowOnboardingSeen) {

            showOnboardingModal();
          }
        }
      );
    }
  );
}

initializeClaudeReflow();
// I can't believe I have to say this but this SetInterval loop is purely for checking the UI status of the Claude ReFlow sidebar button and in my own experience while testing it it's more stable than using a MutationObserver.
setInterval(() => {

  addSettingsButton();

  updateCollapsedButtonState();

  applyBannerGradient(currentSettings);

}, 50);

chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {

    if (
      request.action === 'updateTheme'
    ) {

      applyTheme(
        request.settings
      );

      sendResponse({
        success: true
      });
    }
  }
);
