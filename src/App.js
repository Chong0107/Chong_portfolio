import { useEffect } from "react";
import MenuBar from "./components/MenuBar";
import "./App.css";
import {
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Box,
  Divider,
  Container,
  HStack,
  Spacer,
  Card,
  CardBody,
  CardFooter,
  UnorderedList,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { ExternalLinkIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
import profile from "../src/assets/me.png";
import photo from "../src/assets/myself.jpg";
import silverlake from "../src/assets/silverlake.png";
import familyStore from "../src/assets/familyStore.avif";
import iHealth from "../src/assets/iHealth.png";
import delivery from "../src/assets/Delivery.png";
import happyFam from "../src/assets/happyfam.png";
import javascript from "../src/assets/JSLogo.png";
import typeScript from "../src/assets/typescript.svg";
import java from "../src/assets/java.png";
import python from "../src/assets/python.jpeg";
import php from "../src/assets/php.png";
import react from "../src/assets/react.png";
import flutter from "../src/assets/flutter.png";
import html from "../src/assets/html.png";
import css from "../src/assets/css.png";
import next from "../src/assets/next.png";
import googleCloud from "../src/assets/googleCloud.png";
import flask from "../src/assets/flask.png";
import firebase from "../src/assets/firebase.png";
import mySQL from "../src/assets/mysql.png";
import oracle from "../src/assets/oracle.png";
import mongoDB from "../src/assets/mongodb.webp";
import premire from "../src/assets/pr.png";
import photoshop from "../src/assets/ps.png";
import illustrator from "../src/assets/Ai.png";
import canva from "../src/assets/canva.png";
import figma from "../src/assets/figma.png";
import git from "../src/assets/git.png";
import contact from "../src/assets/contactMe.gif";

const scrollToSection = (href) => {
  if (href && href.startsWith("#")) {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

const App = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="App">
      <MenuBar />
      {/* First section - Home*/}
      <Stack
        minH={"80vh"}
        direction={{ base: "column", md: "row" }}
        bgColor={"black"}
        align={"center"}
        justify={"center"}
        className="fade-in-section"
        position="relative"
        id="home"
      >
        <Flex
          p={8}
          flex={1}
          position={{ base: "absolute", md: "relative" }} // Absolute positioning on smaller screens
          zIndex={{ base: 1, md: 0 }} // Ensure text is above the image on smaller screens
        >
          <Stack spacing={6} w={"full"} maxW={"lg"} ml={{ md: "6rem" }}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text color={"white"} as={"span"} position={"relative"}>
                Turning Ideas
              </Text>
              <br />
              <Text color={"white"} as={"span"}>
                into{" "}
              </Text>
              <Text color={"yellow"} as={"span"}>
                Interactive
              </Text>
              <br />
              <Text color={"white"} as={"span"}>
                Experiences
              </Text>
            </Heading>

            <Text
              fontSize={{ base: "xs", lg: "lg" }}
              color={"gray.500"}
              className="typing-animation"
            >
              I am fresh graduate from University of Malaya and I have taken
              <br />
              Information Technology (Multimedia) course before.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"yellow"}
                color={"black"}
                _hover={{
                  bg: "yellow.400",
                }}
                as="a"
                onClick={() => scrollToSection("#aboutMe")}
                width={{ base: "120px", md: "130px" }}
              >
                See More
              </Button>
              <Button
                rounded={"full"}
                bg={"black"}
                color={"yellow"}
                as="a"
                href="https://drive.google.com/file/d/1MlSOOgEeaB2R33ayhQxYoGAyXJGdFx6X/view?usp=sharing"
                _hover={{
                  border: "2px solid yellow",
                }}
                width={{ base: "120px", md: "130px" }}
              >
                My Resume
              </Button>
            </Stack>
            <HStack direction={{ base: "column", md: "row" }} spacing={4}>
              <IconButton
                variant="outline"
                color="yellow"
                aria-label="Linkedin"
                borderColor={"yellow"}
                icon={<AiFillLinkedin />}
                fontSize="30px"
                _hover={{
                  bg: "yellow",
                  color: "black",
                  borderColor: "yellow",
                }}
                width={{ base: "20px", md: "30px" }}
                as={'a'}
                href="https://www.linkedin.com/in/chong-jun-yi-36aba8230/"
              />
              <IconButton
                variant="outline"
                color="yellow"
                aria-label="GitHub"
                borderColor={"yellow"}
                icon={<AiFillGithub />}
                fontSize="30px"
                _hover={{
                  bg: "yellow",
                  color: "black",
                  borderColor: "yellow",
                }}
                width={{ base: "20px", md: "30px" }}
                as={'a'}
                href="https://github.com/Chong0107"
              />
              <IconButton
                variant="outline"
                color="yellow"
                aria-label="Instagram"
                borderColor={"yellow"}
                icon={<AiFillInstagram />}
                fontSize="30px"
                _hover={{
                  bg: "yellow",
                  color: "black",
                  borderColor: "yellow",
                }}
                width={{ base: "20px", md: "30px" }}
                as={'a'}
                href="https://www.instagram.com/donaldchong666/"
              />
              <IconButton
                variant="outline"
                color="yellow"
                aria-label="facebookl"
                borderColor={"yellow"}
                icon={<AiFillFacebook />}
                fontSize="30px"
                _hover={{
                  bg: "yellow",
                  color: "black",
                  borderColor: "yellow",
                }}
                width={{ base: "20px", md: "30px" }}
                as={'a'}
                href="https://www.facebook.com/profile.php?id=100013205131188"
              />
            </HStack>
          </Stack>
        </Flex>
        <Box
          flex={1}
          w={{ md: "50%" }}
          position={{ base: "absolute", md: "relative" }} // Absolute positioning on smaller screens
          top={0}
          left={0}
          zIndex={{ base: 0, md: 1 }} // Ensure image is behind the text on smaller screens
        >
          <Image alt={"Home Image"} src={profile} />
        </Box>
      </Stack>

      <Box display="flex" justifyContent="center">
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      {/* Second section - About Me*/}
      <Box p={6} id="aboutMe" bg={"black"} className="fade-in-section">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight={"bold"}
            color={"white"}
          >
            About Me
          </Heading>
        </Stack>
        <HStack
          mt={10}
          spacing={{ base: 5, md: 10 }}
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
        >
          <Image
            src={photo}
            alt="Description of the image"
            boxSize={{ base: "250px", md: "500px" }}
            objectFit="cover"
            borderRadius="5%"
          />
          <Spacer />
          <Text
            color={"white"}
            textAlign={"left"}
            fontSize={{ base: "8px", md: "16px" }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: { base: "14px", md: "25px" },
                color: "yellow",
              }}
            >
              Chong Jun Yi
            </span>{" "}
            <br />
            <br />
            As a fresh graduate from the University of Malaya with a degree in
            IT (Multimedia), I am excited to embark on my professional journey
            as I seek opportunities in UI/UX design and frontend development. My
            academic background has equipped me with a strong foundation in
            multimedia technologies, design principles, and interactive
            interfaces. Throughout my coursework, I honed my skills in creating
            user-centered designs and developing engaging, intuitive web
            applications. Now, I am eager to apply my knowledge and creativity
            in a dynamic work environment where I can contribute to building
            compelling digital experiences and continually grow as a designer
            and developer.
          </Text>
        </HStack>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      {/* Third section - Work Experiences */}
      <Box p={6} id="workExperiences" bg={"black"} className="fade-in-section">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight={"bold"}
            color={"white"}
          >
            Work Experiences
          </Heading>
        </Stack>
        <HStack
          mt={10}
          spacing={{ base: 5, md: 10 }}
          as={Container}
          maxW={"4xl"}
          textAlign={"center"}
        >
          <Card
            maxW={{ base: "xs", md: "sm" }}
            border="1px"
            borderColor="gray.500"
            bg="black"
            _hover={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <CardBody>
              <Image
                src={silverlake}
                alt="Silverlake"
                borderRadius={{ base: "md", md: "lg" }}
              />
              <Stack mt="6" spacing="3">
                <Heading fontSize={{ base: "14px", md: "20px" }} color="white">
                  Silverlake Axis MSC Sdn Bhd
                </Heading>
                <Text fontSize={{ base: "10px", md: "14px" }} color="white">
                  <UnorderedList spacing={2} textAlign={"left"}>
                    <ListItem>
                      Participated in the creation of a core banking system.
                    </ListItem>
                    <ListItem>
                      Implemented the layout and design of web pages or app
                      pages using Flutter.
                    </ListItem>
                    <ListItem>
                      Converted UI/UX design wireframes and mockups into code.
                    </ListItem>
                    <ListItem>
                      Ensured the structure and design were consistent with the
                      brand's style guide and user experience (UX) principles.
                    </ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bg={"yellow"}
                _hover={{ bg: "yellow.400" }}
                ml="auto"
                as="a"
                href="https://www.silverlakeaxis.com/"
                fontSize={{ base: "10px", md: "16px" }}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
          <Card
            maxH={{ base: "lg", md: "lg" }}
            maxW={{ base: "lg", md: "md" }}
            border="1px"
            borderColor="gray.500"
            bg="black"
            _hover={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <CardBody>
              <Image
                src={familyStore}
                alt="FamilyStore"
                borderRadius={{ base: "md", md: "lg" }}
              />
              <Stack mt="6" spacing="3">
                <Heading fontSize={{ base: "14px", md: "20px" }} color="white">
                  Family Store Sdn Bhd
                </Heading>
                <Text fontSize={{ base: "10px", md: "14px" }} color="white">
                  <UnorderedList spacing={2} textAlign={"left"}>
                    <ListItem>Accept payments from customers</ListItem>
                    <ListItem>
                      Ensuring all prices and quantities are accurate and
                      providing a receipt to every customer
                    </ListItem>
                    <ListItem>
                      Receive payment from the customer as well as manager
                      crowded customer to prevent congestion
                    </ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bg={"yellow"}
                _hover={{ bg: "yellow.400" }}
                ml="auto"
                as="a"
                href="https://familystore.com.my/"
                fontSize={{ base: "10px", md: "16px" }}
              >
                Learn More
              </Button>
            </CardFooter>
          </Card>
        </HStack>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      {/* Forth section*/}
      <Box p={6} id="projects" bg={"black"} className="fade-in-section">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight={"bold"}
            color={"white"}
          >
            Project Dones
          </Heading>
        </Stack>
        <HStack
          mt={10}
          spacing={{ base: 1, md: 3 }}
          as={Container}
          maxW={"7xl"}
          textAlign={"center"}
        >
          <Card
            maxW={{ base: "xs", md: "sm" }}
            border="1px"
            borderColor="gray.500"
            bg="black"
            _hover={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <CardBody>
              <Heading
                fontSize={{ base: "11px", md: "20px" }}
                color="white"
                mb={5}
              >
                iHealth
              </Heading>
              <Image
                src={iHealth}
                alt="iHealth"
                borderRadius={{ base: "md", md: "lg" }}
                boxSize={{ base: "80px", md: "185px" }}
                display="block"
                mx="auto"
              />
              <Stack mt="6" spacing="3">
                <Text fontSize={{ base: "10px", md: "14px" }} color="white">
                  <UnorderedList spacing={2} textAlign={"left"}>
                    <ListItem>
                      iHealth is a clinic appointment system written in Java
                      using JavaFX
                    </ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bg={"yellow"}
                _hover={{ bg: "yellow.400" }}
                ml="auto"
                as="a"
                href="https://github.com/Chong0107/iHealth-Application.git"
                fontSize={{ base: "7px", md: "16px" }}
              >
                Link to Github <ExternalLinkIcon ml={2} />
              </Button>
            </CardFooter>
          </Card>

          <Card
            maxH={{ base: "md", md: "lg" }}
            maxW={{ base: "sm", md: "md" }}
            border="1px"
            borderColor="gray.500"
            bg="black"
            _hover={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <CardBody>
              <Heading
                fontSize={{ base: "14px", md: "20px" }}
                color="white"
                mb={5}
              >
                Always On Time Delivery
              </Heading>
              <Image
                src={delivery}
                alt="Delivery"
                boxSize={{ base: "120px", md: "185px" }}
                borderRadius={{ base: "md", md: "lg" }}
                display="block"
                mx="auto" // Centering the image horizontally
              />
              <Stack mt="6" spacing="3">
                <Text fontSize={{ base: "10px", md: "14px" }} color="white">
                  <UnorderedList spacing={2} textAlign={"left"}>
                    <ListItem>
                      Always-On-Time-Delivery simulates the delivery process by
                      finding the routes using different algorithms
                    </ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bg={"yellow"}
                _hover={{ bg: "yellow.400" }}
                ml="auto"
                as="a"
                href="https://github.com/Chong0107/Always-On-Time-Delivery-Project-DS-Assigment-.git"
                fontSize={{ base: "10px", md: "16px" }}
              >
                Link to Github <ExternalLinkIcon ml={2} />
              </Button>
            </CardFooter>
          </Card>

          <Card
            maxH={{ base: "md", md: "lg" }}
            maxW={{ base: "xs", md: "md" }}
            border="1px"
            borderColor="gray.500"
            bg="black"
            _hover={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              transform: "scale(1.05)",
              transition: "all 0.3s ease",
            }}
          >
            <CardBody>
              <Heading
                fontSize={{ base: "14px", md: "20px" }}
                color="white"
                mb={5}
              >
                HappyFam
              </Heading>
              <Image
                src={happyFam}
                alt="HappyFam"
                borderRadius={{ base: "md", md: "lg" }}
                boxSize={{ base: "120px", md: "185px" }}
                display="block"
                mx="auto" // Centering the image horizontally
              />
              <Stack mt="6" spacing="3">
                <Text fontSize={{ base: "10px", md: "14px" }} color="white">
                  <UnorderedList spacing={2} textAlign={"left"}>
                    <ListItem>
                      To develop a platform for family member to plan and
                      organize their events via mobile and desktop.
                    </ListItem>
                  </UnorderedList>
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <Button
                variant="solid"
                bg={"yellow"}
                _hover={{ bg: "yellow.400" }}
                ml="auto"
                as="a"
                href="https://family-event-planner-ggfxi15p5-rynndesmond.vercel.app/#about-us-section"
                fontSize={{ base: "10px", md: "16px" }}
              >
                Live URL <ExternalLinkIcon ml={2} />
              </Button>
            </CardFooter>
          </Card>
        </HStack>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      {/* Fifth section - Skills*/}
      <Box p={6} id="skills" bg={"black"} className="fade-in-section">
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl" }}
            fontWeight={"bold"}
            color={"white"}
          >
            My Skills
          </Heading>
        </Stack>
        <Stack
          mt={10}
          spacing={{ base: 1, md: 3 }}
          as={Container}
          maxW={{ base: "sm", md: "7xl" }}
          textAlign={"center"}
        >
          <HStack spacing={{ base: 1, md: 3 }} justify="center">
            <Container>
              <Heading
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Languages
              </Heading>
              <HStack mt={5}>
                <Image
                  src={javascript}
                  alt="JavaScript"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={typeScript}
                  alt="typeScript"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={java}
                  alt="Java"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={python}
                  alt="Python"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={php}
                  alt="PHP"
                  width={{ base: "50px", md: "70px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
            </Container>

            <Container mb={12}>
              <Heading
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Frontend
              </Heading>
              <HStack mt={5}>
                <Image
                  src={react}
                  alt="React"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="rotate enlarge-on-hover"
                />
                <Image
                  src={flutter}
                  alt="Flutter"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={html}
                  alt="HTML"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={css}
                  alt="CSS"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
            </Container>

            <Container mb={10}>
              <Heading
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Backend and Cloud
              </Heading>
              <HStack mt={5}>
                <Image
                  src={next}
                  alt="Next.js"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="white-color enlarge-on-hover"
                />
                <Image
                  src={googleCloud}
                  alt="GoogleCloud"
                  width={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={flask}
                  alt="Flask"
                  width={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="white-color enlarge-on-hover"
                />
              </HStack>
            </Container>
          </HStack>

          <HStack spacing={{ base: 1, md: 3 }} justify="center" mt={10}>
            <Container>
              <Heading
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Database
              </Heading>
              <HStack mt={5}>
                <Image
                  src={firebase}
                  alt="Firebase"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={mySQL}
                  alt="MySQL"
                  width={{ base: "50px", md: "80px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={oracle}
                  alt="Oracle"
                  width={{ base: "50px", md: "80px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={mongoDB}
                  alt="mongoDB"
                  width={{ base: "50px", md: "80px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
            </Container>

            <Container>
              <Heading
                fontSize={{ base: "xl", sm: "2xl" }}
                fontWeight={"bold"}
                color={"white"}
              >
                Tools
              </Heading>
              <HStack mt={5}>
                <Image
                  src={premire}
                  alt="Premire"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={photoshop}
                  alt="Photoshop"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={illustrator}
                  alt="Illustrator"
                  width={{ base: "40px", md: "60px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={canva}
                  alt="Canva"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
              <HStack mt={5}>
                <Image
                  src={figma}
                  alt="Figma"
                  height={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
                <Image
                  src={git}
                  alt="Git"
                  boxSize={{ base: "30px", md: "50px" }}
                  display="block"
                  mx="auto"
                  className="enlarge-on-hover"
                />
              </HStack>
            </Container>
          </HStack>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      {/* Sixth section - Contact Me*/}
      <Box
        bgColor={"black"}
        align={"center"}
        justify={"center"}
        w={"100%"}
        p={4}
      >
        <Heading
          as="h1"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          color={"white"}
          textAlign={"left"}
          mb={4}
          ml={{ base: 10, md: 20 }}
        >
          Contact Me
        </Heading>

        <Stack
          minH={"80vh"}
          direction={{ base: "column", md: "row" }}
          bgColor={"black"}
          align={"center"}
          justify={"center"}
          className="fade-in-section"
          position="relative"
          id="contactMe"
        >
          <Box
            flex={1}
            w={{ md: "30%" }}
            position={{ base: "absolute", md: "relative" }} // Absolute positioning on smaller screens
            top={0}
            left={20}
            zIndex={{ base: 0, md: 1 }} // Ensure image is behind the text on smaller screens
          >
            <Image alt={"Contact"} src={contact} />
          </Box>
          <Flex
            p={8}
            flex={1}
            position={{ base: "absolute", md: "relative" }} // Absolute positioning on smaller screens
            zIndex={{ base: 1, md: 0 }} // Ensure text is above the image on smaller screens
          >
            <Stack spacing={6} w={"full"} maxW={"lg"} ml={{ md: "6rem" }}>
              <Heading
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                textAlign={"left"}
              >
                <Text color={"white"} as={"span"} position={"relative"}>
                  For any work inquiries, collaborations or{" "}
                </Text>
                <Text color={"white"} as={"span"}>
                  even a simple chat, please reach out via{"  "}
                </Text>
                <Text color={"yellow"} as={"span"}>
                  email or one of my social media profiles.
                </Text>
              </Heading>

              <Text
                fontSize={{ base: "xs", lg: "lg" }}
                color={"gray.500"}
                textAlign={"left"}
              >
                Below is my email and phone number.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button
                  rounded={"full"}
                  bg={"yellow"}
                  color={"black"}
                  _hover={{
                    bg: "yellow.400",
                  }}
                  as="a"
                  href="mailto:donaldchong244@gmail.com"
                  width={{ base: "120px", md: "130px" }}
                >
                  <EmailIcon mr={2} /> Email
                </Button>
                <Button
                  rounded={"full"}
                  bg={"black"}
                  color={"yellow"}
                  as="a"
                  href="tel:+60109303298"
                  _hover={{
                    border: "2px solid yellow",
                  }}
                  width={{ base: "120px", md: "130px" }}
                >
                  <PhoneIcon mr={2} /> Phone Call
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </Stack>
      </Box>

      <Box display="flex" justifyContent="center" mt={5}>
        <Divider
          orientation="horizontal"
          borderColor="gray.700"
          borderWidth="2px"
          w="90%"
        />
      </Box>

      <Box p={6} bg={"black"} className="fade-in-section">
        <Heading
          fontSize={{ base: "xs", md: "sm", lg: "lg" }}
          color={"white"}
          textAlign={"center"}
          mt={4}
          fontWeight={"normal"}
        >
          &copy; Chong Jun Yi 2024
        </Heading>
      </Box>
    </div>
  );
};

export default App;
