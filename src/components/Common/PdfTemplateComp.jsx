// PDFTemplate.js
import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    padding: 20,
    // display: "flex",
    // alignItems: "center", // Center items horizontally
    // justifyContent: "center", // Center items vertically
  },
  section: {
    marginTop: 200,
    marginBottom: 10,
  },
  sectionAchiv: {
    marginTop: 30,
    marginBottom: 10,
  },
  sectionLast: {
    marginTop: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textforName: {
    fontFamily: "Helvetica-Bold",
    marginLeft: 220,
    fontSize: "26px",
    fontWeight: "bold",
    textTransform: "uppercase", // Capitalize all text
  },
  textforStrata: {
    marginLeft: 220,
    marginTop: 40,
    fontSize: "14px",
    textTransform: "capitalize", // Capitalize all text
  },
  textforNrp: {
    marginLeft: 220,
    marginTop: 10,
    fontSize: "14px",
    textTransform: "capitalize", // Capitalize all text
  },

  textforTitle: {
    marginLeft: 80,
    marginTop: 30,
    fontSize: "26px",
    letterSpacing: "2px",
    textTransform: "uppercase", // Capitalize all text
  },
  textforSubFirst: {
    marginLeft: 235,
    marginTop: 85,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubFirstPerson: {
    marginLeft: 235,
    marginTop: 43.5,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSub: {
    marginLeft: 235,
    marginTop: 5.2,
    marginRight: 100,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubPersonality: {
    marginLeft: 235,
    marginTop: 21.2,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubFirstExp: {
    marginLeft: 100,
    marginTop: 10,
    fontSize: "12px",
    textTransform: "capitalize",
  },

  textforDateAchiv: {
    marginLeft: 100,
    marginTop: 240,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforOtherAchiv: {
    marginLeft: 100,
    marginTop: 30,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubExp: {
    fontFamily: "Times-Italic",
    marginLeft: 300,
    marginTop: 3,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSubExpTitle: {
    marginLeft: 300,
    marginTop: -12.5,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforDesc: {
    marginLeft: 100,
    marginTop: 215,
    marginRight: 100,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforDate: {
    fontFamily: "Helvetica-Bold",
    marginTop: 60,
    marginLeft: 390,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforSign: {
    marginTop: 5,
    marginLeft: 390,
    fontSize: "12px",
    textTransform: "capitalize",
  },
  textforNameTtd: {
    fontFamily: "Helvetica-Bold",
    marginTop: 60,
    marginLeft: 390,
    fontSize: "12px",
    textTransform: "uppercase",
  },
  tabAlignment: {
    width: 80, // Adjust the width of the tab as needed
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 100, // You can adjust the opacity
  },
});

const PDFTemplate = ({ dataCetak }) => {
  console.log(dataCetak);
  // const experiences = dataCetak.experience;
  console.log(dataCetak.experience);
  console.log(dataCetak.achievement);
  function formatDate(date) {
    const formattedDate = new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      year: "numeric",
      month: "long",
    });
    return formattedDate;
  }
  function formatDateYear(date) {
    const formattedDate = new Date(date).toLocaleDateString("id-ID", {
      year: "numeric",
      month: "long",
    });
    return formattedDate;
  }

  return (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          <Text style={styles.textforName}>{dataCetak.name}</Text>
          <Text style={styles.textforStrata}>{dataCetak.prodi}</Text>
          <Text style={styles.textforNrp}>{dataCetak.nrp}</Text>p{/* BIODATA */}
          <Text style={styles.textforSubFirst}>
            {dataCetak.place_of_birth}, {formatDate(dataCetak.date_of_birth)}
          </Text>
          <Text style={styles.textforSub}>{dataCetak.gender}</Text>
          <Text style={styles.textforSub}>{dataCetak.religion}</Text>
          <Text style={styles.textforSub}>{dataCetak.boarding_address}</Text>
          <Text style={styles.textforSub}>{dataCetak.home_address}</Text>
          <Text style={styles.textforSub}>{dataCetak.email}</Text>
          <Text style={styles.textforSub}>{dataCetak.phone}</Text>
          <Text style={styles.textforSub}>{dataCetak.mbti}</Text>
        </View>
        {/* PERCONALITY */}
        <View style={styles.sectionAchiv}>
          <Text style={styles.textforSubFirstPerson}>{dataCetak.motto}</Text>
          <Text style={styles.textforSubPersonality}>{dataCetak.interest}</Text>
          <Text style={styles.textforSubPersonality}>{dataCetak.reason}</Text>
          <Text style={styles.textforSubPersonality}>{dataCetak.division}</Text>
        </View>
        <View style={styles.backgroundImage}>
          <Image src={process.env.PUBLIC_URL + "/template1.png"} />
        </View>
      </Page>
      <Page size="A4">
        <View>
          {dataCetak.experience && Array.isArray(dataCetak.experience) ? (
            dataCetak.experience.map((exp, expIndex) => (
              <View style={expIndex === 0 ? styles.section : ""}>
                <Text
                  key={expIndex}
                  style={
                    expIndex === 0
                      ? styles.textforSubFirstExp
                      : styles.textforOtherAchiv
                  }
                >
                  {formatDateYear(exp.start_date)} -{" "}
                  {formatDateYear(exp.end_date)}
                </Text>
                <Text style={styles.textforSubExpTitle}>
                  {exp.organization_name}
                </Text>
                <Text key={expIndex} style={styles.textforSubExp}>
                  {exp.position}
                </Text>
              </View>
            ))
          ) : (
            <Text>No experience data available</Text>
          )}
        </View>
        <View style={styles.backgroundImage}>
          <Image src={process.env.PUBLIC_URL + "/template2.png"} />
        </View>
      </Page>
      <Page size="A4">
        <View>
          {dataCetak.achievement && Array.isArray(dataCetak.achievement) ? (
            dataCetak.achievement.map((acv, acvIndex) => (
              <View style={acvIndex === 0 ? styles.section : ""}>
                <Text
                  key={acvIndex}
                  style={
                    acvIndex === 0
                      ? styles.textforSubFirstExp
                      : styles.textforOtherAchiv
                  }
                >
                  {formatDate(acv.date)}
                </Text>
                <Text style={styles.textforSubExpTitle}>{acv.title}</Text>
                <Text key={acvIndex} style={styles.textforSubExp}>
                  {acv.achievement}, {acv.level}
                </Text>
              </View>
            ))
          ) : (
            <Text>No experience data available</Text>
          )}
        </View>
        <View style={styles.backgroundImage}>
          <Image src={process.env.PUBLIC_URL + "/template3.png"} />
        </View>
      </Page>
      <Page size="A4">
        <Text style={styles.textforDesc}>{dataCetak.description}</Text>
        <View style={styles.sectionLast}>
          <Text style={styles.textforDate}>
            Surabaya, {formatDate(dataCetak.created_at)}
          </Text>
          <Text style={styles.textforSign}>Signature</Text>
          <Text style={styles.textforNameTtd}>{dataCetak.name}</Text>
        </View>
        <View style={styles.backgroundImage}>
          <Image src={process.env.PUBLIC_URL + "/template4.png"} />
        </View>
      </Page>
    </Document>
  );
};

export default PDFTemplate;
