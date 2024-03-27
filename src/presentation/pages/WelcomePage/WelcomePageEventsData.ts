import MOLiga from "../../../assets/img/MOLiga.jpg";
import cedhDraco from "../../../assets/img/cedh6abr.jpeg";
import bGComarca from "../../../assets/img/bGComarca27m.jpeg";

import type { EventCardData, EventDescription } from "../../../interfaces";

const mOLigaDesc: EventDescription = {
  date: "06/04/2024",
  location: "Virtual - Spelltable",
  text: "Inicia en el formato competitivo sin moverte de tu hogar, liga de commander competitivo a nivel nacional.",
};

const cedhDracoDesc: EventDescription = {
  date: "06/04/2024",
  location: "Draco Bogota",
  text: "Participa por grandes premios y mide tu nivel como jugador competitivo enfrentando a los mejores.",
};

const bGComarcaDesc: EventDescription = {
  date: "27/04/2024",
  location: "La Comarca Medellin",
  text: "Desde las 4pm tendremos toda nuestra coleccion de juegos de mesa listos para que disfrutemos de ellos.",
};

const mOLigaEventData: EventCardData = {
  imgSrc: MOLiga,
  title: "4º Liga Spelltable",
  btnLabel: "Saber mas...",
  to: "/timer",
  description: mOLigaDesc,
};

const cedhDracoEventData: EventCardData = {
  imgSrc: cedhDraco,
  title: "Torneo cEDH",
  btnLabel: "Saber mas...",
  to: "/timer",
  description: cedhDracoDesc,
};

const bGComarcaEventData: EventCardData = {
  imgSrc: bGComarca,
  title: "Parcehe de juegos de mesa",
  btnLabel: "Saber mas...",
  to: "/timer",
  description: bGComarcaDesc,
};

export const eventsStack: EventCardData[] = [
  mOLigaEventData,
  cedhDracoEventData,
  bGComarcaEventData,
];
