const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
   console.log(`Logged in as ${client.user.tag}!`);
});

const response = ( tittle, description, img, thumbnail, et, dr, k, footer) => { 
   let res = new Discord.MessageEmbed() 
   .setTitle(tittle)
   .setColor(3447003)
   .setDescription(description)
   .setImage(img)
   .setThumbnail(thumbnail)
   .setTimestamp(); 

   if (footer) {
      res.setFooter(footer);
   }

   if(et) {
      res.addField('Efectos de terreno', et);
   }

   if(dr) {
      res.addField('Doctrinas recomendadas', dr);
   }

   if(k) {
      res.addField("Kit", k);
   }

   return res;
}

const onClient = (message) => { 
   if(message.content.startsWith('-')) { 
      const msg = message.content.split('-');

      switch(msg[1].toUpperCase()) {
         case 'UNIDADES':
            message.channel.send(`${message.author} 
             medieros
             
             `);
            break;
            
              
      

         

case 'COSTILLEAUX':
            message.channel.send(response(
               'costilleaux',
               'Buena unidad de caballeria para iniciar, y familiarizarte con ella',
               'https://cdn.discordapp.com/attachments/822215493418352640/822232655226732544/Coustilier_2.png',
               
               
            )); 
            break;  
            case 'ARQUERO MONTADO':
            message.channel.send(response(
               'aruquero montado',
               'Unidad no recomendada',
               'https://cdn.discordapp.com/attachments/822215493418352640/822233189396905994/ironcap_bowriders_2.png',
               
               
            ));   
            break;
            case 'CABALLERIA YELMO DE HIERRO':
            message.channel.send(response(
               'Caballeria yelmo de hierro',
               'Buena unidad de caballeria verde, muy rapida, su carga es decente por su bajo cooldown, y carga rapida',
               'https://cdn.discordapp.com/attachments/822215493418352640/822233146866663494/Elite_ironcap_scout_2.png',
               
               
            ));   
            break;
            case 'KORCHIN':
               message.channel.send(response(
                  'Korchin',
                  'La version mejorarda de los arqueros montados, unidad no recomendada, debido a su liderazgo y precio de reparar',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233767074070588/Khorchins_2.png',
                  ));      
            break;
            case 'YEOMEN':
               message.channel.send(response(
                  'Yeomen',
                  'Buena unidad de caballeria con lanza, carga decente y melee decente',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234616424431677/yeomen_2.png',
                  ));      
            break;
            case 'CABALLERIA DE PREFECTURA':
               message.channel.send(response(
                  'Caballeria de prefectura',
                  'Buena unidad de caballeria con espada, muy rapida, y con un cooldown de carga muy bajo, especialmente util para matar arqueros y tropas de choque',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234495297126400/prefecture_cavalary_2.png',
                  ));      
            break;
            case 'HACHA DAGA':
               message.channel.send(response(
                  'Hacha-Daga',
                  'Unidad decente, pero no es muy recomendable a la practica, debido a su baja vida y poco daño, pero al nivel final, desbloquean una carga muy interesante y divertida',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234145752875024/dagger_axe_2.png',
                  ));      
            break;
            case 'KHEVTUUL':
               message.channel.send(response(
                  'Khevtuul',
                  'Unidad que plantea un concepto interesante de hibrido, pero a la practica no es muy buena, sin embargo si sabes manejar bien su carga, le podras sacar mucho provecho',
                  'https://i.ibb.co/b191THk/Khevtuul.png',
                  ));      
            break;
            case 'TUNDRA':
               message.channel.send(response(
                  'Tundra',
                  'La mejor caballeria morada, igual de buena que algunas doradas, es una unidad buensima, muy diverida de usar, recomendadisima.',
                  'https://i.ibb.co/YDD7fZ3/Yeomen-de-la-tundra.png',
                  ));      
            break;
            case 'CIPAROS':
               message.channel.send(response(
                  'Ciparos',
                  'unidad bastante buena, muy util para matar unidades de choque gracias a su pisoteo, y util para laguearle el pc a los demas xD',
                  'https://i.ibb.co/RChMfLs/Ciparo.png',
                  ));      
            break;
            case 'LANCEROS DE FUEGO':
               message.channel.send(response(
                  'Lanceros de fuego',
                  'Buena caballeria dorada, perfecta para anti caballeria, aunque esta un poco fuera de meta sigue siendo util cuando esta maxeada',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234804509605918/fire_lancer_2.png',
                  ));      
            break;
            case 'LANCEROS DEL NORTE':
               message.channel.send(response(
                  'Lanceros del norte',
                  'Unidad excelente, de las mejores del juego. La mejor caballeria, le hace counter a las picas imperiales, y a los escudos, unidad maravillosa',
                  'https://i.ibb.co/hdqPgLV/Lancero-del-norte.png',
                  ));      
            break;
            case 'KESHIGS':
               message.channel.send(response(
                  'Keshigs',
                  'Unidad muy divertida de usar, esta fuera de meta, su carga si logras hacer que flanquen puede hacer muchos destrosos, aunque esta muy fuera de meta. su counter principal son los escudos y las picas',
                  'https://media.discordapp.net/attachments/822215493418352640/822234836201898084/kheshig_2.png',
                  ));      
            break;
            case 'MONASTICOS':
               message.channel.send(response(
                  'Monasticos',
                  'La caballeria mas tanque muy buen melee, su carga hace desastres, pero requiere mucho vuelo y es muy muy lenta, pero muy buena para ser tu primera caballeria dorada, recomendada',
                  'https://i.ibb.co/n649wwf/Monastico.png',
                  ));      
            break;
            case 'HUSARES':
               message.channel.send(response(
                  'Husares',
                  'De las mejores unidades de caballeria, la mejor carga del juego, es una caballeria rapida, no es muy tanque, y con un melee decente',
                  'https://i.ibb.co/Wckfx5W/Husar.png',
                  ));      
            break;
            case 'CATAFRACTOS':
               message.channel.send(response(
                  'Catafractos',
                  'Caballeria tanque, con un daño decente, y una carga decente, no es muy recomendada, ya que si buscas una caballeria tanque saca los monasticos, y si quires una de carga saca los husares',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234761011265597/cataphract_2.png',
                  ));      
            break;
            case 'BALLESTEROS MONTADOS':
               message.channel.send(response(
                  'Ballesteros montados',
                  'Unidad muy divertida de usar, pero muy facil de counterear, perfecta para intercepcios y batallas campales, especialmente buenas para matar arqueros y excelente para cazar heroes y es la caballeria mas rapida del juego',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822438271992856626/rattan_rangers_2.png',
                  ));      
            
                        
            break;
            case 'MEDIEROS':
               message.channel.send(response(
                  'Medieros',
                  'Unidad no recomendable para ningun caso',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232155512897576/farmer_2.png',
                  ));      
            break;
            case 'PIQUEROS DE SEÑORIO':
               message.channel.send(response(
                  'Pirqueros de señorio',
                  'Unidad de relleno, la mejor uniadad blanca para combate, si te sobra espacio llevala',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822231619640229918/demesne_2.png',
                  ));      
            break;
            case 'LEÑADORES':
               message.channel.send(response(
                  'Leñadores',
                  'Unidad mejor que los siervos para melee. pero peor para farmear',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232181698330684/lenhador_2.png',
                  ));      
            break;
            case 'SIERVOS':
               message.channel.send(response(
                  'Siervos',
                  'Unidad hecha para farmear en el mundo abieto, para tener mayor eficacia',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232221317333052/serf_2.png',
                  ));      
            break;
            case 'LANCEROS MILICIANOS':
               message.channel.send(response(
                  'Lanceros milicianos',
                  'Unidad decente blanca, util para aguantar flechas de tropas tier bajo',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232313135628299/spear_militia_2.png',
                  ));      
            break;
            case 'ESPADACHINES MILICIANOS':
               message.channel.send(response(
                  'Espadachines milicianos',
                  'Unidad decente de choque blanca, recomendada para tiers bajos',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232316289613824/sword_militia_2.png',
                  ));      
            break;
            
            case 'CENTINELAS ALDEANOS':
               message.channel.send(response(
                  'Centinelas aldenanos',
                  'Muy buena unidad debido a su bajisimo liderazgo, para mover torres o para rellenar',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232364033114212/watchmen_2.png',
                  ));      
            break;
            case 'LANCEROS DE SEÑORIO':
               message.channel.send(response(
                  'Lanceros de señorio',
                  'Muy buena unidad de escudos para empezar, muy baratos y utiles ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232832139198524/demesne_spearmen_2.png',
                  ));      
            break;
            case 'ESPADACHINES YELMO DE HIERRO':
               message.channel.send(response(
                  'Espadachines yelmo de hierro',
                  'Muy buena unidad de choque cuando no tienes los condotieros',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233197445775380/Ironcap_swordsmen_2.png',
                  ));      
            break;
            case 'JAVALINEROS MILICIANOS':
               message.channel.send(response(
                  'Javalinero miliciano',
                  'Unidad de javalinas barata, no tan recomendadas, por su bajo daño y su pobre melee ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233211249623040/javelin_militia_2.png',
                  ));      
            break;
            case 'PICAS MILICIANAS':
               message.channel.send(response(
                  'picas milicianas',
                  'Excelente unidad, posiblemente la mejor unidad verde del juego, debido a que pueden stunear y atacar a 2 objetivos a la vez. Sacala si no la tienes, y maxeala rapido, perfecta para hacerle counter a las unidades de choque  ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233219629187082/pike_militia_2.png',
                  ));      
            break;
            case 'PIQUEROS DE RATAN':
               message.channel.send(response(
                  'piqueros de ratan',
                  'buena unidad, pero siendo mas ofensivas, tienen un veneno util igual que realentizan, su formacion defensiva es muy mala, pero son buenas para melee  ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233235295305728/rattan_pikemen_2.png',
                  ));      
            break;
            case 'ESPADACHINES DE RATAN':
               message.channel.send(response(
                  'espadachines de rattan',
                  'buena unidad de choque, aunque quedan opacados por los yelmos de hierro ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233249040433182/rattan_roundshields_2.png',
                  ));      
            break;
            case 'CONDOTIEROS':
               message.channel.send(response(
                  'condotieros',
                  'mejor unidad de choque tier bajo, puede matar uniaddes tier mas altos, asi que si te gustan las unidaades de choque, ve por ellos, su rama puede variar, si te gustan mas tanques maxealos por abajo, pero si te gusta que hagan mas daño, subelos por arriba. ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233661793239060/condottieri_2.png',
                  ));      
            break;
            case 'ALABARDEROS':
               message.channel.send(response(
                  'alabarderos',
                  'muy buena unidad hibrida, tanto defensiva como ofensiva, recomendada',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233698765373450/Halberdiers_2.png',
                  ));      
            break;
            case 'ESCUDOS YELMO DE HIERRO':
               message.channel.send(response(
                  'escudos hielmo de hierro',
                  'buena unidad de escudos tier bajo, buen bloqueo, te van a servir para tanquear y aguantar, pero no hacen daño',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233710605893642/ironcap_spearmen_2.png',
                  ));      
            break;
            case 'GUARDIAS DE PREFECTURA':
               message.channel.send(response(
                  'guardias de prefectura',
                  'La contraparte de los condotieros, es una unidad muy util, si no quieres hacer los desafios de los condotieros, sacalos, su "cubrir comandante" es muy util y bueno',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233813517205574/prefecture_guards_2.png',
                  ));      
            break;
            case 'PIQUEROS DE PREFECTURA':
               message.channel.send(response(
                  'piqueros de prefectura',
                  'Su carga es letal, especialmente buena para deletear heroes, pero una vez que cargan su melee es medio inutil',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233823286394880/prefecture_pike_2.png',
                  ));      
            break;
            case 'ESCUDEROS':
               message.channel.send(response(
                  'escuderos',
                  'unidad de choque no tan buena, opacada por los condotieros y los guardias de prefectura ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233918387388446/squires_2.png',
                  ));      
            break;
            case 'CABALLEROS DE LA EXPEDICION':
               message.channel.send(response(
                  'caballeros de la expedicion',
                  'unidad EXCELENTE de las mejores unidades (por no decir la mejor)unidad de choque, muy tanques, mucho daño, y buena carga, y le hace counter a la guardia leal, a las picas imperiales, y a los fortebraccios',
                  'https://i.ibb.co/k441sJz/caballeros-de-la-expedicion.png',
                  ));      
            break;
            case 'FORTEBRACCIOS':
               message.channel.send(response(
                  'fortebraccios',
                  'Unas picas excelente, sus picas son muy largas, por lo que son perfectos para hacerle counter a la caballeria, y a algunas uniadades de choque',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234183086768148/fortebraccio_2.png',
                  ));      
            break;
            case 'SARGENTOS ALABARDEROS':
               message.channel.send(response(
                  'sargento alabardero',
                  'muy buena unidad, buena carga, muy buen melee, y buena formacion defensiva, sumando a su bajo liderazgo queda una unidad muy completa',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234197212790804/halberdier_sergeants_2.png',
                  ));      
            break;
            case 'PICAS IMPERIALES':
               message.channel.send(response(
                  'picas imperiales',
                  'unidad excelente, su marcha imperial es una de las mejores habilidades del juego, ya que tumba por lo que camina, muy util para pushear o para defender. Puede ser cualquier veterania, arriba mas daño, abajo mas tanque',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234211569238116/imp_pike_2.png',
                  ));      
            break;
            case 'JAVALINEROS IMPERIALES':
               message.channel.send(response(
                  'javalineros imperiales',
                  'Muy buena unidad de javalinas, tienen muy poca muncion, pero el daño que hacen es una delicia, perfecta para deletear heroes, y su melee es bastante bueno, su unico inconveniente es su bajisima municion ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234286089306203/imperial_javelin_2.png',
                  ));      
            break;
            case 'SARGENTOS JAVALINEROS':
               message.channel.send(response(
                  'sargentos javalineros',
                  'Muy buena unidad de javalinas, a diferencia de los imperiales, estos tienen muchisima muncion, pero no tanto daño, sin embargo sigue siendo una unidad muy muy util',
                  'https://i.ibb.co/FHzx8JL/Javalinas.png',
                  ));      
            break;
            case 'GUARDIA LEAL ':
               message.channel.send(response(
                  'guardia leal',
                  'La mejor unidad de escudos del juego, mucho aguante, mucho daño, sacalas lo antes posible',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234448070311936/loyal_guard_2.png',
                  ));      
            break;
            case 'SARGENTOS LANCEROS':
               message.channel.send(response(
                  'sargentos lanceros',
                  'buena unidad de escudos por si no tienes la guardia leal, pero no son muy buenos en el late game',
                  'https://i.ibb.co/g3nKTm2/sargento-lancero.png',
                  ));      
            break;
            case 'HOMBRES DE ARMAS':
               message.channel.send(response(
                  'hombres de arma',
                  'unidad no tan recomendada, a no ser que esten maxeados, pero no valen tanto la pena',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234457817350144/Men_at_Arms_2.png',
                  ));      
            break;
            case 'AZAPS':
               message.channel.send(response(
                  'azaps',
                  'Otra unidad de choque excelente, muy divertida de usar con unas habilidades muy interesantes, le hace counter a la marcha imperial, y semi counter a la guardia leal',
                  'https://i.ibb.co/hDn6bDL/Azaps.png',
                  ));      
            break;
            case 'GUARDIAS DE PALACIO':
               message.channel.send(response(
                  'guardias de palacio',
                  'unidad recientemente buffeada, es bastante versatil, y situacional',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234485906210856/Palace_Guards_2.png',
                  ));      
            break;
            case 'LANCEROS DE LA GUARDIA IMPERIAL':
               message.channel.send(response(
                  'Lanceros de la guardia imperial',
                  'buena unidad de escudos, excelente para tanquear flechas y artilleria, pero la guardia leal es muchisimo superior',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234563497558047/shield_t4._2png.png',
                  ));      
            break;
            case 'TSEREGS':
               message.channel.send(response(
                  'Tseregs',
                  'Buena uniad de choque, perfecta para tumbar muros de escudos, pero una vez que cargan no son muy utiles',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234604857458688/Tseregs_2.png',
                  ));      
            break;
            case 'SEGADORES':
               message.channel.send(response(
                  'Segadores',
                  'Excelente unidad de choque, es muy muy lenta y muy tanque, su carga es devastadora, muy buena para patrullar las murallas, pero necesita mucho mucho micromanejo para darle su maxima utilidad',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234779281129502/Elite_iron_reapers_2.png',
                  ));      
            break;
            case 'GUARDIA JENIZARA':
               message.channel.send(response(
                  'guardia jenizara',
                  'Unidad muy versatil y diverida de usar, es el counter de los segadores, y es aun mejor tropa para patrullar las murallas, y deletear heroes, recomendada',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234827260297236/janao_2.png',
                  ));      
            break;
            case 'BERSERKS':
               message.channel.send(response(
                  'berserks',
                  'Unidad dificil de usar, con mucha vida, y buen daño, pero son dificiles, pero perfectas para patrullar las murallas',
                  'https://cdn.discordapp.com/attachments/822215493418352640/831174068413399071/vt_berserkers.png',
                  ));      
            break;
            case 'ALPINOS':
               message.channel.send(response(
                  'alpinos',
                  'Unidad muy buena, su carga deletea TODO muy recomendada, y buen melee',
                  'https://cdn.discordapp.com/attachments/822215493418352640/831173967301443625/vt_alp_t3.png',
                  ));      
            break;
              
            
            case 'FEENRIRS':
               message.channel.send(response(
                  'feenrirs',
                  'Unidad no tan buena, pero muy diverido verlos saltar',
                  'https://cdn.discordapp.com/attachments/822215493418352640/831174052163878952/vt_lobinho.png',
                  ));      
            break;
            case 'ARQUEROS MILICIANOS':
               message.channel.send(response(
                  'arqueros milicianos',
                  'Unidad no muy buena',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822231559155351582/Archer_militia_2.png',
                  ));      
            break;
            case 'ARQUEROS DE LEVA':
               message.channel.send(response(
                  'arqueros leva',
                  'Unidad mejor que los milicianos, pero igual son malos',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822231559155351582/Archer_militia_2.png',
                  ));      
            break;
            case 'BALLESTEROS DE SEÑORIO':
               message.channel.send(response(
                  'ballesteros de señorio',
                  'Unidad basica de ballestas, buen daño perforante contra unidades tier bajo',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232812513787955/Demesne_crossbowmen_2.png',
                  ));      
            break;
            case 'ARQUEROS DE SEÑORIO':
               message.channel.send(response(
                  'arqueros de señorio',
                  'Buenos arqueros para el earley game',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822232842859446282/Demesne_Archer_2.png',
                  ));      
            break;
            case 'ARQUEOS YELMO DE HIERRO':
               message.channel.send(response(
                  'arqueros yelmo de hierro',
                  'Buenos, pero los de señorio son mejores',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233161760768071/ironcap_archer_2.png',
                  ));      
            break;
            case 'ARCABUCEROS YELMO DE HIERRO':
               message.channel.send(response(
                  'arcabuceros yelmo de hierro',
                  'Excelente unidad inicial de rango, muy buen daño y la veteraia les mejora mucho',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233180568158248/ironcap_arquebusiers_2.png',
                  ));      
            break;
            case 'ARBALESTEROS':
               message.channel.send(response(
                  'Arbalesteros',
                  'Buena unidad de ballestas, mas daño perforante que los arqueros, pero su poco rango y que no pueden disparar con comba les juega mucho en contra',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233640447639592/arbalists_2.png',
                  ));      
            break;   
            case 'ARCABUCEROS DE SEÑORIO':
               message.channel.send(response(
                  'Arcabuceros de señorio',
                  'Un poco mejores que los yelmo de hierro, pero son bastante buenos',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233652653195264/blue_arquebusiers_2.png',
                  ));      
            break; 
            case 'ARQUEROS DE FUEGO':
               message.channel.send(response(
                  'arqueros de fuego',
                  'muy buena unidad de arqueros, contra tiers medianos debido a su fuego, tienen buen daño, y buen rango',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233688724602910/fire_archers_2.png',
                  ));      
            break; 
            case 'JENIZAROS':
               message.channel.send(response(
                  'Jenizaros',
                  'Los mejores arcabuceros azules, buena cadencia y un daño BRUTAL y sirve para parar caballeria',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233728234946631/janinho_2.png',
                  ));      
            break;
            case 'NAMKHAN':
               message.channel.send(response(
                  'namkhan',
                  'La mejor unidad de rango azul, y de las mejores del juego. Gracias a su sangrado se vuelve una tropa brutalmente buena para matar unidades de todas las tiers',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233795762978906/namkhan_2.png',
                  ));      
            break;
            case 'ARQUEROS DE PREFECTURA':
               message.channel.send(response(
                  'arqueros de prefectura',
                  'Buena unida de rango gracias a su habilidad de "lluvia de flechas que hace destrosos',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233804961480725/prefecture_archers_2.png',
                  ));      
            break;
            case 'CHO KU NU':
               message.channel.send(response(
                  'cho ku nu',
                  'Muy buena unidad de rango, pero mas a corta-mediana distancia, es perfecta para deletear heroes',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233838984888340/rattan_marksmen_2.png',
                  ));      
            break;
            case 'ARQUEROS VIBORA':
               message.channel.send(response(
                  'arqueros vibora',
                  'Unidad buena, pero no pierdas tu tiempo en maxearla',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233850808893440/rattan_vipers_2.png',
                  ));      
            break;
            case 'ARQUEROS DE VANGUARDIA':
               message.channel.send(response(
                  'arqueros vanguardia',
                  'Unidad no recomendada',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822233935080587264/vanguard_archers_2.png',
                  ));      
            break;
            case 'ARQUEROS IMPERIALES':
               message.channel.send(response(
                  'arqueros Imperiales',
                  'Posiblemtne la mejor tropa de rango, muchismo daño y perforacion de armadura',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234260177813564/imperial_archers_2.png',
                  ));      
            break;
            case 'ARCABUCEROS IMPERIALES':
               message.channel.send(response(
                  'arcabuceros Imperiales',
                  'Tropa excelente, y cuando activa su "2" se vuelve la tropa con mas dps del juego, mucha municion y mucho daño, recomendadisima',
                  'https://i.ibb.co/X31cRD0/Screenshot-1.png',
                  ));      
            break;
            case 'FUSILEROS KRIEGSRAT':
               message.channel.send(response(
                  'arcabuceros kriegsrat',
                  'Muy buena tropa de arcabuces, muchisima cadencia, muy buen daño, pero muy muy poca muncion, por lo que para las TW no es tan util por que tieens que llevarlos al supply todo el tiempo ',
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234424330289162/kriegsrat_fusiliers_2.png',
                  ));      
            break;
            case 'VASALLOS':
               message.channel.send(response(
                  'vasallos',
                  'Buena unidad de arqueros, es la unidad de arqueros con mas rango por lo que se le puede sacar mucho provecho'  ,
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234437361074236/longbowmen_2.png',
                  ));      
            break;
            case 'LANZALLAMAS':
               message.channel.send(response(
                  'lanzallamas',
                  'una unidad brutalmente buena, pero muy dificil de usar. Pero puesta detras de escudos o al lado de la entrada impide el paso de todo, muy recomendadable'  ,
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234752059965440/barcyan_2.png',
                  ));      
            break;
            case 'FALCONETTI':
               message.channel.send(response(
                  'falconetti',
                  'una unidad brutalmente buena, es la tropa con mas rango del juego, es basicamente tener cañones moviles, pero cuidado que todos te los van a focusear, indispensable tenerla en TW, para tumbar torres y matar escudos y aglomeraciones de tropas. Recomendadisima'  ,
                  'https://cdn.discordapp.com/attachments/822215493418352640/822234791591673887/falconetti_2.png',
                  ));      
            break;
            case 'GK':
               message.channel.send(response(
                  'gk',
                  'el mejor player del juego :D'  ,
                  
                  ));      
            break;
            case 'MAZO1':
               message.channel.send(response(
                  'Mazo1',
                  '80armadura 20fuerza/agi'  ,
                  'https://i.ibb.co/gWHCRLN/mazo1.png',
                  ));      
            break;
            case 'MAZO2':
               message.channel.send(response(
                  'Mazo2',
                  '80armadura 20fuerza/agi, build perfecta para hacer CC'  ,
                  'https://i.ibb.co/yV48xWf/Mazo2.png',
                  ));      
            break;
            case 'HACHA1':
               message.channel.send(response(
                  'Hacha1',
                  'full armadura, esta build es solo si tienes la runa morada del hacha, que te permite recuperar salud con la habilidad de "danca de armas"'  ,
                  'https://i.ibb.co/9psd9pT/Hacha1.png',
                  ));      
            break;
            case 'HACHA2':
               message.channel.send(response(
                  'Hacha2',
                  'full armadura, esta build no tiene para curarse, pero tiene 2 stuns que rotan muy rapido'  ,
                  'https://i.ibb.co/V2Rk64v/Hacha2.png',
                  ));      
            break;
            case 'GUJA':
               message.channel.send(response(
                  'Guja',
                  'Full fuerza, la Q que tengo en la imagen puede cambiar'  ,
                  'https://i.ibb.co/JKrGN78/Glaive.png',
                  ));      
            break;
            case 'ESPADA CORTA':
               message.channel.send(response(
                  'Espada Corta',
                  '90armadura 10fuerza'  ,
                  'https://i.ibb.co/Mpks4tX/SS.png',
                  ));      
            break; 
            case 'ARCO LARGO1':
               message.channel.send(response(
                  'Arco largo1',
                  'full agilidad'  ,
                  'https://i.ibb.co/ZMgW4X0/Arco1.png',
                  ));      
            break; 
            case 'ARCO LARGO2':
               message.channel.send(response(
                  'Arco largo2',
                  'full agilidad'  ,
                  'https://i.ibb.co/CWMZ4Zr/Arco2.png',
                  ));      
            break;  
            case 'ARCO CORTO1':
               message.channel.send(response(
                  'Arco corto1',
                  'full agilidad'  ,
                  'https://i.ibb.co/5hkRZX2/Arco-Corto1.png',
                  ));      
            break;  
            case 'ARCO CORTO2':
               message.channel.send(response(
                  'Arco corto2',
                  'full agilidad'  ,
                  'https://i.ibb.co/WWv2HkS/Arco-Corto2.png',
                  ));      
            break; 
            case 'DAGAS':
               message.channel.send(response(
                  'Dagas',
                  'full fuerza'  ,
                  'https://i.ibb.co/J54hFK7/Dgas.png',
                  ));      
            break;   
            case 'ESPADA LARGA1':
               message.channel.send(response(
                  'Espada Larga',
                  'full armadura, build totalmente orientada en support, con buffo de velocidad y de curacion'  ,
                  'https://i.ibb.co/RTVdqJz/Espada1.png',
                  ));      
            break; 
            case 'ESPADA LARGA2':
               message.channel.send(response(
                  'Espada Larga2',
                  'full armadura, Build mas enfocada en Pve y en Pvp'  ,
                  'https://i.ibb.co/TtynRKr/Espada2.png',
                  ));      
            break; 
            case 'LANZA':
               message.channel.send(response(
                  'Lanza',
                  'Full agilidad'  ,
                  'https://i.ibb.co/kHnBRBd/Lanza.png',
                  ));      
            break; 
            case 'MOSQUETE':
               message.channel.send(response(
                  'Mosquete',
                  'Full agilidad o full fuerza, depende de tu mosquete'  ,
                  'https://i.ibb.co/D5n8WxY/Mosquete1.png',
                  ));      
            break; 
            case 'MOSQUETE2':
               message.channel.send(response(
                  'Mosquete',
                  'Full fuerza, esta build esta mas orientada en Pve, para debilitar tropas gracias a sus habilidades.'  ,
                  'https://i.ibb.co/VVKSjjc/mosquete2.png',
                  ));      
            break; 
            case 'NODACHI':
               message.channel.send(response(
                  'NODACHI',
                  'Full fuerza, o 60 fuerza 40 agi'  ,
                  'https://i.ibb.co/M7F2h2m/Nodachi1.png',
                  ));      
            break;
            case 'NODACHI2':
               message.channel.send(response(
                  'NODACHI2',
                  'Full fuerza, o 60 fuerza 40 agi'  ,
                  'https://i.ibb.co/BTscdV1/Nodachi2.png',
                  ));      
            break;
                
            break;   
            
   
  



         default: 
            message.channel.send(`Comando no valido "${msg[1]}"`);
            break;
            
            
      }

   }
}

client.on("message", message => onClient(message));
client.login("ODM3MDkwMzc5MTQ4Njg5NDY4.YInfKg.QUo9jIMCOAAqk4psajVVfcj_ChM");