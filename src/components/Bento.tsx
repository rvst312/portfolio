import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useEffect } from 'react';

const Bento = () => {

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const gradient = document.getElementById('gradient');
            if (gradient) {
                gradient.style.left = e.pageX + 'px';
                gradient.style.top = e.pageY + 'px';
            }
        }
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const styles = {
        boxTitle: {
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            padding: "40px",

            headingOne: {
                fontSize: "4rem"
            }
        },
        boxSkills: {
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            justifyContent: "center",
            padding: "40px",

            textSkills: {
                fontSize: "1.5rem",
                fontWeight: "bold",
    }
},
    boxAvatar: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    boxLeftBottom: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    boxRightBottom: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    }

const skills = [
    "Desarrollo",
    "Innovación",
    "Automatización",
    "Consultoría",
    "Formación IT",
    "Resolución de problemas",
    "Optimización",
];

return (
    <div className='wrapper'>
        <div id='gradient' className="gradient"></div>
        <Flex direction="column" gap="3">
            <Flex gap="3">
                <Box width="50%" height="calc(50vh - 22px)" className='box' style={styles.boxTitle}>
                    <Text weight="bold" style={styles.boxTitle.headingOne}>
                        Software con un propósito
                    </Text>
                </Box>
                <Box width="25%" height="calc(50vh - 22px)" className='box' style={styles.boxSkills}>
                    {skills.map((skill, index) => (
                        <Text key={index} style={styles.boxSkills.textSkills}>
                            {skill}
                        </Text>
                    ))}
                </Box>
                <Box width="25%" height="calc(50vh - 22px)" className='box' style={styles.boxAvatar}>
                    <div className='avatar'>
                        <Avatar fallback="A"
                            size="6"
                            src='/public/profile.jpg'
                        />
                        <Heading size="5" >
                            Aarón RV
                        </Heading>
                        <Text size="3">
                            Barcelona, España
                        </Text>
                        <div className='social-icons'>
                            <a target='_blank' href="https://instagram.com/rvst.io">
                                <InstagramLogoIcon />
                            </a>
                            <a target='_blank' href="https://www.linkedin.com/in/aar%C3%B3n-franco-fern%C3%A1ndez/">
                                <LinkedInLogoIcon />
                            </a>
                            <a target='_blank' href="https://github.com/rvst312">
                                <GitHubLogoIcon />
                            </a>
                        </div>
                    </div>
                </Box>
            </Flex>
            <div className="bottom-wrapper">
                <div className="bottom-left-wrapper">
                    <div className="top box">
                        <Heading>
                            Me especializo
                        </Heading>
                        <Text>
                            en crear soluciones de alto rendimiento
                        </Text>
                    </div>
                    <div className="bottom">
                        <div className="left box" style={styles.boxLeftBottom}>
                            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=rvst312&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=transparent&hide_border=true&order=2" height="80%" alt="languages graph" />
                        </div>
                        <div className="right box" style={styles.boxRightBottom}>
                            <img src="https://github-readme-stats.vercel.app/api?username=rvst312&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=transparent&locale=en&hide_border=true&order=1" height="80%" alt="stats graph" />
                        </div>
                    </div>
                </div>
                <div className="bottom-right-wrapper box">
                    <div className="text-project">
                        <Heading>
                            Proyectos con impacto real
                        </Heading>
                        <Text>
                            Para encajar todos las piezas de tu negocio
                        </Text>
                    </div>
                    <img src="/public/phone-project.png" alt="projects" className='project-image' />
                </div>
            </div>
        </Flex>
    </div>
);
}

export default Bento;