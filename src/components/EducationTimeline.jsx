import { useTheme, useMediaQuery, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Box } from '@chakra-ui/react';

const CustomTimelineItem = styled(TimelineItem)(() => ({
    '&::before': {
        content: 'none',
        padding: 0, // Reset padding
        // Add any other styles you'd like to apply
    },
}));

export default function EducationTimeline() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Detect small screen

    // Animation Variants
    const foggyLeftToRight = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const foggyRightToLeft = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <Box>
            <Timeline position={isSmallScreen ? 'normal' : 'alternate'} sx={{ padding: isSmallScreen ? '0' : '16px' }}>
                {/* Savitribai Phule Pune University */}
                <motion.div
                    variants={foggyLeftToRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <CustomTimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
                                Savitribai Phule Pune University {`(SPPU)`}
                            </Typography>
                            <Typography variant="body2">{`Bachelor's in Computer Science (B.Sc.), CGPA: 8.59 (Current)`}</Typography>
                            <Typography variant="body2">2022 - 2024</Typography>
                        </TimelineContent>
                    </CustomTimelineItem>
                </motion.div>

                {/* Marathwada Mitramandal College */}
                <motion.div
                    variants={foggyRightToLeft}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <CustomTimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
                                Marathwada Mitramandal College of Commerce {`(MMCC)`}
                            </Typography>
                            <Typography variant="body2">Higher Secondary Education (HSC), 55%</Typography>
                            <Typography variant="body2">2020 - 2021</Typography>
                        </TimelineContent>
                    </CustomTimelineItem>
                </motion.div>

                {/* Pirangut English Medium High School */}
                <motion.div
                    variants={foggyLeftToRight}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <CustomTimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="success" />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant={isSmallScreen ? 'h6' : 'h5'} sx={{ fontWeight: 'bold' }}>
                                Pirangut English Medium High School
                            </Typography>
                            <Typography variant="body2">Secondary School Certificate (SSC), 67.80%</Typography>
                            <Typography variant="body2">2018-2019</Typography>
                        </TimelineContent>
                    </CustomTimelineItem>
                </motion.div>
            </Timeline>
        </Box>
    );
}
