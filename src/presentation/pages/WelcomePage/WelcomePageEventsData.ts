import type {
  EventCardData,
  EventDescription,
  EventsObj,
} from "../../../interfaces";
import { routerStrings } from "../../../generic/globalStrings";

const mOLigaDesc: EventDescription = {
  date: "04-15-2024",
  location: "Virtual - Spelltable",
  owner: "Mystic Ouphes",
  text: "Inicia en el formato competitivo sin moverte de tu hogar, liga de commander competitivo a nivel nacional.",
  socialMedia: [
    { name: "discord", link: "https://discord.gg/tafXsmD4" },
    { name: "whatsapp", link: "https://wa.me/573053136951" },
  ],
  largeDesc: [
    `
  ¡Bienvenidos a la emocionante liga Virtual de Commander, organizada con el poder de SpellTable!`,
    `Prepárate para sumergirte en un universo de estrategia, poder y magia mientras te enfrentas a otros comanderos de todo el pais. En este torneo, la flexibilidad y la amabilidad del formato Commander brillan como nunca antes. Con todas las cartas a tu disposición (ProxyFriendly) y la libertad de construir tu mazo alrededor de un comandante único, ¡las posibilidades son infinitas!`,
    `Con SpellTable, la experiencia de juego es más accesible que nunca. Ya sea que te encuentres en la comodidad de tu hogar o explorando nuevos horizontes y destrozando fronteras, ¡la liga de Commander de Mystic Ouphes te espera!`,
    `Conoce Spelltable: https://www.spelltable.com/`,
  ],
};

const cedhDracoDesc: EventDescription = {
  date: "04-06-2024",
  owner: "Draco Hobby Center",
  ownerimg:
    "https://firebasestorage.googleapis.com/v0/b/mtg-events-file-storage.appspot.com/o/dracologo.jpg?alt=media&token=0a41da7c-42cd-4548-9dbb-c333878bf514",
  ownerWebPage: "https://dracostore.co/",
  location: "Draco Bogota",
  text: "Participa por grandes premios y mide tu nivel como jugador competitivo enfrentando a los mejores.",
  socialMedia: [
    {
      name: "facebook",
      link: "https://facebook.com/DracoHobbyCenter",
    },
    {
      name: "instagram",
      link: "https://instagram.com/dracohobbycenter",
    },
    {
      name: "whatsapp",
      link: "https://wa.me/573155681771",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/@DracoHobbyCenter",
    },
  ],
  largeDesc: [
    `¡Bienvenidos al Torneo mas grande de Commander en Colombia, el evento más competitivo del país! Evento organizado y respaldado por Draco Hobby Center, este torneo busca reunir a los mas hábiles y competitivos jugadores del formato y el pais entero.`,
    `En este épico enfrentamiento, los jugadores desplegarán sus estrategiaspara quedarse con un pool de premios inigualable, que incluye desde cartas codiciadas como dual-lands hasta productos exclusivos y sellados, los participantes no solo competirán por la gloria, sino también por engordar su coleccion o billetera.`,
    `Desde las tácticas más refinadas hasta la desconocida Thassa-Consultation, cada partida será un duelo de ingenio y estrategia donde solo los más capacitados podrán alcanzar la victoria. ¿Estás preparado para enfrentarte a los mejores jugadores del país y reclamar tu lugar en la cima?`,
    `¡te esperamos!`,
  ],
  ownerMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6096394696815!2d-74.06223592432377!3d4.663486041977633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9b8d53b713df%3A0x199473b60eb1a013!2sDraco%20Hobby%20Center%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1712071298881!5m2!1ses!2sco",
};

const bGComarcaDesc: EventDescription = {
  date: "04-27-2024",
  owner: "La Comarca Hobbies & Foot",
  ownerimg:
    "https://firebasestorage.googleapis.com/v0/b/mtg-events-file-storage.appspot.com/o/lacomarcalogo.jpg?alt=media&token=15026bb3-9adb-4c93-b06d-2750894c1c68",
  location: "La Comarca Medellin",
  text: "Desde las 4pm tendremos toda nuestra coleccion de juegos de mesa listos para que disfrutemos de ellos.",
  largeDesc: [
    `Esta Semana Santa La Comarca tendrá un receso, pero no queríamos irnos sin programar un evento divertido para todos ustedes. 
    Por esta razón, este miércoles 27 de marzo tendremos Parche de Juegos de Mesa, una jornada pensada especialmente para ustedes.`,
    `Tendremos a disposición no sólo los juegos de La Comarca, también llevaremos algunos de nuestra colección personal... 
    y si alguien quiere llevar el suyo para compartir ¡Perfecto! La idea es que, desde las 6 pm, podamos conocer y participar 
    de partidas hasta las 11 pm, pero puedes llegar desde las 4 pm, nuestra hora normal de apertura.`,
    `Ese día contaremos con un combo especial:`,
    `Hamburguesa con tocineta + papas artesanales + cerveza Heineken o gaseosa Postobón 400ml o Coca Cola 235ml $20.000*`,
    `¡Los esperamos!`,
    `*Combo con otra bebida diferente:`,
    `Vanity o H2OH: $21.000`,
    `Cerveza Señor Bolsón: $30.000`,
  ],
  socialMedia: [
    {
      name: "facebook",
      link: "https://www.facebook.com/lacomarca.hobbies.1",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/lacomarcahobbies/",
    },
    {
      name: "whatsapp",
      link: "https://wa.me/573053136951",
    },
  ],
  ownerMapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2215694563374!2d-75.60494602432077!3d6.234497426452932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429d0d87700e9%3A0x5eaa3b1be26e2411!2sLa%20Comarca%20Hobbies%20%26%20Food!5e0!3m2!1ses!2sco!4v1712070107071!5m2!1ses!2sco",
};

const mo_liga_event_data: EventCardData = {
  id: `mo_liga_event_data`,
  imgSrc:
    "https://firebasestorage.googleapis.com/v0/b/mtg-events-file-storage.appspot.com/o/MOLiga.jpg?alt=media&token=9054fc75-5835-4b6c-bc1a-486907d95ea6",
  title: "4º Liga cEDH Spelltable",
  btnLabel: "Saber mas...",
  to: `${routerStrings.eventDetail}`,
  description: mOLigaDesc,
  type: "primary",
};

const cedh_draco_event_data: EventCardData = {
  id: "cedh_draco_event_data",
  imgSrc:
    "https://firebasestorage.googleapis.com/v0/b/mtg-events-file-storage.appspot.com/o/cedh6abr.jpeg?alt=media&token=ba150068-78b7-4680-b1fa-9f6d59205a09",
  title: "Torneo cEDH",
  btnLabel: "Saber mas...",
  to: `${routerStrings.eventDetail}`,
  description: cedhDracoDesc,
};

const bg_comarca_event_data: EventCardData = {
  id: "bg_comarca_event_data",
  imgSrc:
    "https://firebasestorage.googleapis.com/v0/b/mtg-events-file-storage.appspot.com/o/bGComarca27m.jpeg?alt=media&token=af45f16e-7c26-4c0e-aea5-358be92a653e",
  title: "Parche de juegos de mesa",
  btnLabel: "Saber mas...",
  to: `${routerStrings.eventDetail}`,
  description: bGComarcaDesc,
};

export const eventsStack: EventCardData[] = [
  mo_liga_event_data,
  cedh_draco_event_data,
  bg_comarca_event_data,
];

export const eventsObj: EventsObj = {
  mo_liga_event_data,
  cedh_draco_event_data,
  bg_comarca_event_data,
};
