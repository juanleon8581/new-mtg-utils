import MOLiga from "../../../assets/img/MOLiga.jpg";
import cedhDraco from "../../../assets/img/cedh6abr.jpeg";
import bGComarca from "../../../assets/img/bGComarca27m.jpeg";

import type {
  EventCardData,
  EventDescription,
  EventsObj,
} from "../../../interfaces";
import { routerStrings } from "../../../generic/globalStrings";

const mOLigaDesc: EventDescription = {
  date: "04-04-2024",
  location: "Virtual - Spelltable",
  owner: "Mystic Ouphes",
  text: "Inicia en el formato competitivo sin moverte de tu hogar, liga de commander competitivo a nivel nacional.",
};

const cedhDracoDesc: EventDescription = {
  date: "04-06-2024",
  owner: "Draco Hobby Center",
  location: "Draco Bogota",
  text: "Participa por grandes premios y mide tu nivel como jugador competitivo enfrentando a los mejores.",
};

const bGComarcaDesc: EventDescription = {
  date: "04-27-2024",
  owner: "La Comarca Hobbies & Foot",
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
};

const mo_liga_event_data: EventCardData = {
  id: `mo_liga_event_data`,
  imgSrc: MOLiga,
  title: "4º Liga Spelltable",
  btnLabel: "Saber mas...",
  to: `${routerStrings.eventDetail}`,
  description: mOLigaDesc,
  type: "primary",
};

const cedh_draco_event_data: EventCardData = {
  id: "cedh_draco_event_data",
  imgSrc: cedhDraco,
  title: "Torneo cEDH",
  btnLabel: "Saber mas...",
  to: `${routerStrings.eventDetail}`,
  description: cedhDracoDesc,
};

const bg_comarca_event_data: EventCardData = {
  id: "bg_comarca_event_data",
  imgSrc: bGComarca,
  title: "Parcehe de juegos de mesa",
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
