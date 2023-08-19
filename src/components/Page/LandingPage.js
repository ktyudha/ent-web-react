import { Link } from "react-router-dom";
import FormLayout from "../../layouts/FormLayout";
import React, { useState } from "react";

const LandingPage = () => {
  // const image = process.env.PUBLIC_URL;
  const IconData = [
    {
      icon: `/Icon/IconRP.svg`,
      icon2: "/Cha/CRP.svg",
      label: "REPORTER",
      description:
        "Reporter is person who have responsible in making news articles and broadcasting some event reports.",
      Gen14: [
        {
          nama: "Rafli Herdiansyah",
          prodi: "D4 Teknik Elektronika",
          foto: "/Member/RP_RAFLI.jpg",
        },
      ],
      Gen15: [
        {
          nama: "Thania Wahyu A.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/RP_THANIA.jpg",
        },
        {
          nama: "Irfan Ardiansyah",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/RP_IRFAN.jpg",
        },
        {
          nama: "Jessica Barans W.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/RP_JESSICA.jpg",
        },
        {
          nama: "A. A. Inten Pramitriyani",
          prodi: "D4 Teknologi Game",
          foto: "/Member/RP_INTEN.jpg",
        },
      ],
      Gen16: [
        {
          nama: "Rifda Qurrotul'Ain",
          prodi: "D4 Sains Data Terapan",
          foto: "/Member/RP_RIFDA.jpg",
        },
        {
          nama: "Suci Rindya K.",
          prodi: "D4 Sistem Pembangkit Energi",
          foto: "/Member/RP_SUCI.jpg",
        },
      ],
      Gen17: [
        {
          nama: "Arman Jaya",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/RP_ARMAN.jpg",
        },
        {
          nama: "Erina Nur M. J.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/RP_ERINA.jpg",
        },
        {
          nama: "Harun Budiseto",
          prodi: "D4 Teknologi Rekayasa Multimedia",
          foto: "/Member/RP_HARUN.jpg",
        },
        {
          nama: "Maya Listyani",
          prodi: "D4 Teknologi Rekayasa Multimedia",
          foto: "/Member/RP_MAYA.jpg",
        },
      ],
    },

    {
      icon: "/Icon/IconFG.svg",
      icon2: "/Cha/CFG.svg",
      label: "PHOTOGRAPHER",
      description:
        "Photographer is person who have responsible in take a documentation photo at some event.",
      Gen15: [
        {
          nama: "Bunga Adinda",
          prodi: "D4 Teknologi Game",
          foto: "/Member/FG_BUNGA.jpg",
        },
        {
          nama: "M. Izzudin Fasya",
          prodi: "D3 Teknik Informatika",
          foto: "/Member/FG_FASYA.jpg",
        },
        {
          nama: "M. Krisna Sofyan",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/FG_KRISNA.jpg",
        },
      ],
      Gen16: [
        {
          nama: "Karina Sovia S.",
          prodi: "D3 Telekomunikasi",
          foto: "/Member/FG_KARINA.jpg",
        },
        {
          nama: "Lily Ananta S.",
          prodi: "D4 Telekomunikasi",
          foto: "/Member/FG_LILY.jpg",
        },
        {
          nama: "Johan Muhammad I.",
          prodi: "D3 Elektro Industri",
          foto: "/Member/FG_JOHAN.jpg",
        },
        {
          nama: "Miftahul Rizqi",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/FG_RIZKY.jpg",
        },
      ],
      Gen17: [
        {
          nama: "Ashilliya Atsmara Z.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/FG_ASHIL.jpg",
        },
        {
          nama: "Ikhsan Nur A.",
          prodi: "D4 Teknologi Rekayasa Multimedia",
          foto: "/Member/FG_IKHSAN.jpg",
        },
        {
          nama: "Muhammad Soleh.",
          prodi: "D4 Teknoogi Rekayasa Multimedia",
          foto: "/Member/FG_SOLEH.jpg",
        },
      ],
    },
    {
      icon: "/Icon/IconVG.svg",
      icon2: "/Cha/CVG.svg",
      label: "VIDEOGRAPHER",
      description:
        "Videographer is person who have responsible in making small scale journalism video, start from take a video, video editing, and audio editing.",
      Gen14: [
        {
          nama: "Dyaz Nurul A. I.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/VG_DYAZ.jpg",
        },
      ],
      Gen15: [
        {
          nama: "Fariz Bagaskoro M.",
          prodi: "D4 Teknik Telekomunikasi",
          foto: "/Member/VG_FARIZ.jpg",
        },
      ],
      Gen16: [
        {
          nama: "Iqbal Dhiyaudin P.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/VG_IQBAL.jpg",
        },
        {
          nama: "Burhanuddin Ahmad H.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/VG_BURHAN.jpg",
        },
      ],
      Gen17: [
        {
          nama: "Alvira Nilam A. P.",
          prodi: "D4 Sistem Pembangkit Energi",
          foto: "/Member/VG_ALVIRA.jpg",
        },
        {
          nama: "Elham Cahya R.",
          prodi: "D3 Telekomunikasi",
          foto: "/Member/VG_ELHAM.jpg",
        },
        {
          nama: "Fuad Zaki N.",
          prodi: "D4 Teknologi Rekayasa Multimedia",
          foto: "/Member/VG_FUAD.jpg",
        },
        {
          nama: "Gerardus M. Angger",
          prodi: "D4 Teknologi Rekayasa Internet",
          foto: "/Member/VG_ANGGER.jpg",
        },
      ],
    },
    {
      icon: "/Icon/IconDG.svg",
      icon2: "/Cha/CDG.svg",
      label: "GRAPHIC DESIGNER",
      description:
        "Graphic designer is person who have responsible in making visualization an information with computer software.",
      Gen15: [
        {
          nama: "Marwah Insan K.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/DG_IIL.jpg",
        },
        {
          nama: "Ryan Lazuardy",
          prodi: "D4 Teknologi Game",
          foto: "/Member/DG_RYAN.jpg",
        },
        {
          nama: "M. A. Ekky Ardhana",
          prodi: "D3 Telekomunikasi",
          foto: "/Member/DG_EKKY.jpg",
        },
      ],
      Gen16: [
        {
          nama: "Diva Farikha S.",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/DG_DIVA.jpg",
        },
        {
          nama: "M. Rasyid Maulana",
          prodi: "D3 Multimedia Broadcasting",
          foto: "/Member/DG_RASYID.jpg",
        },
        {
          nama: "Satrio Yoga P.",
          prodi: "D3 Teknik Informatika",
          foto: "/Member/DG_YOGA.jpg",
        },
      ],
      Gen17: [
        {
          nama: "Afsun Filosof.",
          prodi: "D3 Telekomunikasi ",
          foto: "/Member/DG_AFSUN.jpg",
        },
        {
          nama: "Shabrina Putri R.",
          prodi: "D4 Teknologi Rekayasa Multimedia",
          foto: "/Member/DG_SHABRINA.jpg",
        },
      ],
    },
    {
      icon: "/Icon/IconWM.svg",
      icon2: "/Cha/CWM.svg",
      label: "WEBMASTER",
      description:
        "Webmaster is person who have responsible in technical network of campus and campus website development.",
      Gen15: [
        {
          nama: "Cahyo Arissabarno.",
          prodi: "D4 Teknik Komputer",
          foto: "/Member/WM_CAHYO.jpg",
        },
        {
          nama: "M. N. Hidayatul Khoiron",
          prodi: "D3 Teknik Informatika",
          foto: "/Member/WM_KHOIRON.jpg",
        },
        {
          nama: "Santi",
          prodi: "D4 Teknik Informatika",
          foto: "/Member/WM_SANTI.jpg",
        },
      ],
      Gen16: [
        {
          nama: "M. Althaf Firdaus",
          prodi: "D4 Sistem Pembangkit Energi",
          foto: "/Member/WM_ALTHAF.jpg",
        },
        {
          nama: "Nabulatulhawa",
          prodi: "D3 Teknik Informasi",
          foto: "/Member/WM_HAWA.jpg",
        },
        {
          nama: "A. M. Khoirul Fattah",
          prodi: "D4 Teknik Informatika",
          foto: "/Member/WM_KHOIRUL.jpg",
        },
      ],
      Gen17: [
        {
          nama: "Alfian Aditya K.",
          prodi: "D4 Teknologi Game",
          foto: "/Member/WM_ALFIAN.jpg",
        },
        {
          nama: "Krisna Wahyu S.",
          prodi: "D4 Teknik Informatika",
          foto: "/Member/WM_KRISNA.jpg",
        },
        {
          nama: "Syahrul Wicaksono",
          prodi: "D4 Telekomunikasi",
          foto: "/Member/WM_SYAHRUL.jpg",
        },
        {
          nama: "Kurniawan Tri Yudha",
          prodi: "D4 Telekomunikasi",
          foto: "/Member/WM_YUDHA.jpg",
        },
      ],
    },
    // ... other icon data
  ];
  console.log(IconData);

  const [selectedIcon, setSelectedIcon] = React.useState(0);
  // const [selectedIcon, setSelectedIcon] = useState(null);
  // const [selectedMembers, setSelectedMembers] = useState([]);

  const handleIconClick = (index) => {
    setSelectedIcon(index);
    // setSelectedMembers(memberData[IconData[index].label]);
  };

  return (
    <div>
      <FormLayout>
        <section className="bg-hero text-center flex flex-col py-10 px-12  md:pt-20 relative">
          <p className="text-3xl md:text-6xl lg:text-7xl lg:px-20 font-GothamBlack font-extrabold font-p text-white mb-4 pt-20">
            EEPIS NEWS AND NETWORK TEAM
          </p>
          <p className="text-sm px-16 md:px-40 font-p2 font-GothamBlack md:text-xl lg:text-2xl  lg:px-72 text-white mb-4">
            A Great Place to Grow Together with Our Team, Come join Us !
          </p>
          <div className="flex items-center flex-col justify-center md:pt-10 lg:pb-20">
            <Link
              to={"/registration"}
              className="bg-teal-500 w-2/5  text-white font-bold py-2 px-4 rounded-full mt-4 md:text-xl hover:bg-gray-300 hover:text-white transition duration-300"
            >
              <button>Join Us</button>
            </Link>
            <Link
              to={"/requirement"}
              className="bg-yellow-500 w-2/5  text-white font-bold py-2 px-4 rounded-full mt-4 md:text-xl hover:bg-gray-300 hover:text-white transition duration-300"
            >
              <button>Requirement</button>
            </Link>
          </div>
        </section>

        {/* Gambar blending */}
        <div className="bg-blend-image absolute left-0 w-full h-full z-10 lg:mtminf">
          <img
            src={process.env.PUBLIC_URL + "/charal.png"}
            alt="Hero"
            className="w-full mx-auto mb-4 md:w-2/4"
          />
        </div>

        <section className="h-80 lg:h-96 bg-hero"></section>

        {/* Section 2: Logo dan Penjelasan UKM */}
        <section className="bg-white pb-16 px-8 pt-20 md:pt-80 lg:pt-96 text-center">
          <div className="lg:pt-32">
            <img
              src={process.env.PUBLIC_URL + "/logoent.png"}
              alt="Logo UKM XYZ"
              className="w-52 mx-auto mb-4 md:w-72 lg:w-96"
            />
            <p className="mb-4 text-center text-xs md:text-lg md:px-20 md:pt-5 lg:text-2xl lg:px-28  font-montserrat text-black">
              ENT is a Journalism and Networking Team hosted by the Computer
              Network and Information Systems Unit of Politeknik Elektronika
              Negeri Surabaya (PENS).
            </p>
          </div>
        </section>

        {/* Section 3: Foto Divisi UKM */}
        <section className="bg-white  px-8 text-center">
          <img
            src={process.env.PUBLIC_URL + "iconalldiv.png"}
            alt="Logo Divisi UKM XYZ"
            className="mx-auto mb-4 w-full md:p-10 lg:p-20 "
          />
        </section>

        {/* Section 4: Tombol Icon Kesamping */}
        <section className="pt-16 px-4 text-center">
          <div className="flex justify-center">
            {IconData.map((item, index) => (
              <div
                key={index}
                className={`transition-transform duration-300 transform cursor-pointer ${
                  selectedIcon === index
                    ? "bg-white shadow-md ring-1 ring-gray-300"
                    : "bg-white"
                } rounded-full flex items-center justify-center mx-4`}
                onClick={() => handleIconClick(index)}
              >
                <img src={item.icon} alt={item.label} className="w-28 h-w-28" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Deskripsi Divisi */}
        <section className="px-4 text-center">
          <div className="flex flex-col items-center">
            <div className="flex pt-8 pb-8">
              {["/Cha/CFG.svg", "/Cha/CDG.svg"].includes(
                IconData[selectedIcon]?.icon2
              ) ? (
                <>
                  <div className="w-2/5">
                    <img
                      src={IconData[selectedIcon]?.icon2 || ""}
                      alt={IconData[selectedIcon]?.label || ""}
                      className="w-full h-w-full"
                    />
                  </div>
                  <div className="w-3/5 mt-7 text-left pl-4">
                    <p className="text-2xl  md:text-4xl lg:text-6xl font-GothamBlack font-black text-sky-900 mb-2">
                      {IconData[selectedIcon]?.label || ""}
                    </p>
                    <p className="text-xs md:text-lg lg:text-2xl text-gray-500 mb-4">
                      {IconData[selectedIcon]?.description || ""}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-3/5 mt-7 text-right pr-4">
                    <p className="text-2xl md:text-4xl lg:text-6xl font-GothamBlack font-black text-sky-900 mb-2">
                      {IconData[selectedIcon]?.label || ""}
                    </p>
                    <p className="text-xs md:text-lg lg:text-2xl text-gray-500 mb-4">
                      {IconData[selectedIcon]?.description || ""}
                    </p>
                  </div>
                  <div className="w-2/5">
                    <img
                      src={IconData[selectedIcon]?.icon2 || ""}
                      alt={IconData[selectedIcon]?.label || ""}
                      className="w-full h-w-full"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Section 6: Daftar Member */}
        <section className="bg-white pb-8 px-10 md:px-14 text-center">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center ">
              <div className="mb-10 py-2 px-3 bg-teal-500 rounded-lg text-white">
                <p className="text-xs md:text-xl lg:text-3xl font-white">
                  Members!
                </p>
              </div>

              <div className="justify-center">
                {IconData[selectedIcon]?.Gen14?.length > 0 && (
                  <p className="text-2xl font-montserrat md:text-3xl lg:text-4xl text-sky-900 mb-4 mt-2">
                    14th Generation
                  </p>
                )}
                {IconData[selectedIcon]?.Gen14?.length > 0 ? (
                  <div className="flex flex-wrap justify-center">
                    {IconData[selectedIcon]?.Gen14.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center relative p-1"
                      >
                        <div className="relative">
                          <img
                            src={process.env.PUBLIC_URL + item.foto}
                            alt="Foto Member"
                            className="w-28 h-w-28 md:w-40 lg:w-44 rounded-md"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-full font-sans bg-gradient-to-t from-gray-800 to-transparent text-white p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-md flex justify-end flex-col">
                            <p className="text-name font-bold md:text-sm lg:text-base mb-1">
                              {item.nama}
                            </p>
                            <p className="text-prodi md:text-sm lg:text-sm">
                              {item.prodi}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="justify-center">
                {IconData[selectedIcon]?.Gen15?.length > 0 && (
                  <p className="text-2xl font-montserrat md:text-3xl lg:text-4xl text-sky-900 mb-4 mt-2">
                    15th Generation
                  </p>
                )}
                {IconData[selectedIcon]?.Gen15?.length > 0 ? (
                  <div className="flex flex-wrap justify-center">
                    {IconData[selectedIcon]?.Gen15.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center relative p-1"
                      >
                        <div className="relative">
                          <img
                            src={process.env.PUBLIC_URL + item.foto}
                            alt="Foto Member"
                            className="w-28 h-w-28 md:w-40 lg:w-44 rounded-md"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-full font-sans bg-gradient-to-t from-gray-800 to-transparent text-white p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-md flex justify-end flex-col">
                            <p className="text-name font-bold md:text-sm lg:text-base mb-1">
                              {item.nama}
                            </p>
                            <p className="text-prodi md:text-sm lg:text-sm">
                              {item.prodi}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="justify-center">
                {IconData[selectedIcon]?.Gen16?.length > 0 && (
                  <p className="text-2xl font-montserrat md:text-3xl lg:text-4xl text-sky-900 mb-4 mt-2">
                    16th Generation
                  </p>
                )}
                {IconData[selectedIcon]?.Gen16?.length > 0 ? (
                  <div className="flex flex-wrap justify-center">
                    {IconData[selectedIcon]?.Gen16.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center relative p-1"
                      >
                        <div className="relative">
                          <img
                            src={process.env.PUBLIC_URL + item.foto}
                            alt="Foto Member"
                            className="w-28 h-w-28 md:w-40 lg:w-44 rounded-md"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-full font-sans bg-gradient-to-t from-gray-800 to-transparent text-white p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-md flex justify-end flex-col">
                            <p className="text-name font-bold md:text-sm lg:text-base mb-1">
                              {item.nama}
                            </p>
                            <p className="text-prodi md:text-sm lg:text-sm">
                              {item.prodi}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="justify-center">
                {IconData[selectedIcon]?.Gen17?.length > 0 && (
                  <p className="text-2xl font-montserrat md:text-3xl lg:text-4xl text-sky-900 mb-4 mt-2">
                    17th Generation
                  </p>
                )}
                {IconData[selectedIcon]?.Gen17?.length > 0 ? (
                  <div className="flex flex-wrap justify-center">
                    {IconData[selectedIcon]?.Gen17.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center relative p-1"
                      >
                        <div className="relative">
                          <img
                            src={process.env.PUBLIC_URL + item.foto}
                            alt="Foto Member"
                            className="w-28 h-w-28 md:w-40 lg:w-44 rounded-md"
                          />
                          <div className="absolute bottom-0 left-0 w-full h-full font-sans bg-gradient-to-t from-gray-800 to-transparent text-white p-2 opacity-0 transition-opacity duration-300 hover:opacity-100 rounded-md flex justify-end flex-col">
                            <p className="text-name font-bold md:text-sm lg:text-base mb-1">
                              {item.nama}
                            </p>
                            <p className="text-prodi md:text-sm lg:text-sm">
                              {item.prodi}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </FormLayout>
    </div>
  );
};

export default LandingPage;
