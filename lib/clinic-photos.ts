export const clinicPhotos = [
  {
    src: "/images/Clinic/clinic-entrance.jpg",
    alt: "Glass entrance door at METADERM Skin Aesthetics Centre.",
    caption: "Clinic entrance",
    position: "left center",
  },
  {
    src: "/images/Clinic/clinic-treatment-room.jpg",
    alt: "Treatment room with chairs, equipment, and a window.",
    caption: "Treatment room",
    position: "center",
  },
  {
    src: "/images/Clinic/clinic-consultation-room.jpg",
    alt: "Consultation room with a desk and visitor chairs.",
    caption: "Consultation room",
    position: "center",
  },
  {
    src: "/images/Clinic/clinic-treatment-chairs.jpg",
    alt: "Treatment chairs and equipment in the clinic.",
    caption: "Treatment chairs",
    position: "center",
  },
  {
    src: "/images/Clinic/clinic-relaxation-chair.jpg",
    alt: "Relaxation chair and equipment in a treatment room.",
    caption: "Relaxation chair",
    position: "center",
  },
  {
    src: "/images/Clinic/clinic-waiting-area.jpg",
    alt: "Waiting area with a sofa beside a glass partition.",
    caption: "Waiting area",
    position: "center",
  },
] as const;

export const homepageGallery = clinicPhotos.slice(0, 3);
