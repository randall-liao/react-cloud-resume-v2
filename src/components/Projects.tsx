<<<<<<< HEAD
import { Box, Typography, Stack, Chip, useTheme, alpha } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const jobs = [
  {
    title: "Senior Backend Engineer",
    company: "Cosmos",
    period: "2021 - Present",
    description: "Architected a serverless microservices backend handling 50k+ concurrent connections. Optimized DynamoDB access patterns reducing latency by 40%.",
    tags: ["FastAPI", "AWS Fargate", "Redis", "Python"]
  },
  {
    title: "Cloud Infrastructure Engineer",
    company: "Axon",
    period: "2019 - 2021",
    description: "Designed the CI/CD pipeline for machine learning model deployments. Managed EC2 fleet auto-scaling for neural network training jobs.",
    tags: ["Terraform", "Docker", "Jenkins", "Bash"]
  },
  {
    title: "Backend Developer",
    company: "Data Engineering Inc.",
    period: "2018 - 2019",
    description: "Implemented real-time data ingestion services. Worked on high-throughput event streaming using Kafka and Apache Flink.",
    tags: ["Apache Flink", "Kafka", "Java", "PostgreSQL"]
  }
];
=======
import { Box, Typography, Stack, Paper, Chip } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
>>>>>>> main

const Projects = () => {
  const theme = useTheme();

  return (
<<<<<<< HEAD
    <Box component="section" sx={{ mb: 12 }}>
      <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 6 }}>
        <HistoryIcon color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h4" component="h2" sx={{ fontWeight: 700, letterSpacing: '-0.025em' }}>
          Commit History
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative', pl: { xs: 4, md: 6 } }}>
        {/* Git Line */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 12, md: 24 },
            top: 0,
            bottom: 0,
            width: 2,
            background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 80%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
            zIndex: 0,
          }}
        />

        <Stack spacing={6}>
          {jobs.map((job, index) => (
            <Box key={index} sx={{ position: 'relative', '&:hover .git-node': { bgcolor: 'primary.main' } }}>
              {/* Git Node */}
              <Box
                className="git-node"
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  bgcolor: '#ffffff',
                  border: `2px solid ${theme.palette.primary.main}`,
                  position: 'absolute',
                  left: { xs: '-26px', md: '-30px' },
                  top: 24,
                  zIndex: 1,
                  transition: 'background-color 0.3s',
                  boxShadow: `0 0 0 4px #ffffff`,
                }}
              />

              {/* Card */}
              <Box
                sx={{
                  bgcolor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 3,
                  p: 3,
                  transition: 'all 0.3s',
                  '&:hover': {
                    boxShadow: theme.shadows[4],
                    borderColor: alpha(theme.palette.primary.main, 0.3),
                  }
                }}
              >
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', md: 'center' }} spacing={1} sx={{ mb: 2 }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                      {job.company}
                    </Typography>
                    <Typography variant="subtitle2" color="primary" sx={{ fontWeight: 600 }}>
                      {job.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      bgcolor: '#ffffff',
                      border: `1px solid ${theme.palette.divider}`,
                      borderRadius: 1,
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    {job.period}
                  </Box>
                </Stack>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                  {job.description}
                </Typography>

                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
                  {job.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: '#ffffff',
                        border: `1px solid ${theme.palette.divider}`,
                        borderRadius: 1,
                        fontFamily: '"Fira Code", monospace',
                        fontWeight: 500,
                        color: 'text.secondary',
                        '&:hover': {
                          color: 'primary.main',
                          borderColor: alpha(theme.palette.primary.main, 0.5),
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
=======
    <Box sx={{ px: 2, mb: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2, px: 1 }}>
            <TimelineIcon color="primary" fontSize="small" />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.secondary', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Architecture Log
            </Typography>
        </Stack>

        <Box sx={{ position: 'relative', pl: 1 }}>
            <Box sx={{ position: 'absolute', top: 8, bottom: 8, left: 19, width: 2, bgcolor: 'divider' }} />

            {/* Project Cosmos */}
            <Box sx={{ position: 'relative', pl: 5, mb: 3 }}>
                <Box sx={{ position: 'absolute', left: 15, top: 16, width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main', border: '4px solid white', boxShadow: 1, zIndex: 1 }} />
                <Paper
                    elevation={0}
                    sx={{
                        borderRadius: 3,
                        border: '1px solid',
                        borderColor: 'divider',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                    }}
                >
                    <Box sx={{ height: 96, position: 'relative', bgcolor: 'grey.100' }}>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5R76gzu8ASTi-HhYfeaEGI_ndv6_g26YN2iGs2eztov37mbW22yF8YFfXDJ0cUj85C4An4DkLiBOMPyg8WdDwiXvFqon8Zmx0PfeGAAOYoySsTmxY3bu3yfUUP1iqgijfonHWB8oRG2lkJkenazi8HrpADpbe9ll1dMVUNqM9ADkbnn7LF7RJqAa4Aqug7KxoG3M3b2FCvVG3LryoVLNCggL3PfZYnBljjneyFxL0uF6cuXP0QfJxeJiKLaLrQoRt93ggDiXbK19t"
                            alt="Abstract network"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 50%, transparent 100%)' }} />
                        <Box sx={{ position: 'absolute', bottom: 8, left: 16 }}>
                            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1 }}>Project Cosmos</Typography>
                            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', fontWeight: 700, color: 'primary.main' }}>Senior Architect</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ p: 2, pt: 1 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, lineHeight: 1.5 }}>
                            Orchestrated a multi-region Kubernetes migration reducing latency by 40%.
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {['AWS', 'K8s', 'Terraform'].map(tag => (
                                <Chip key={tag} label={tag} size="small" sx={{ borderRadius: 1, height: 20, fontSize: '0.65rem', fontFamily: '"Fira Code", monospace', bgcolor: '#eff6ff', color: 'primary.main', border: '1px solid', borderColor: '#dbeafe' }} />
                            ))}
                        </Stack>
                    </Box>
                </Paper>
            </Box>

            {/* Axon Core */}
            <Box sx={{ position: 'relative', pl: 5, mb: 3 }}>
                <Box sx={{ position: 'absolute', left: 15, top: 16, width: 10, height: 10, borderRadius: '50%', bgcolor: 'text.secondary', border: '4px solid white', zIndex: 1 }} />
                <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'grey.50', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>Axon Core</Typography>
                            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', color: 'text.secondary' }}>Backend Lead</Typography>
                        </Box>
                        <Chip label="2021-2023" size="small" sx={{ borderRadius: 1, height: 20, fontSize: '0.65rem', fontFamily: '"Fira Code", monospace', bgcolor: 'white', border: '1px solid', borderColor: 'divider' }} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5, lineHeight: 1.5 }}>
                            High-throughput event streaming platform processing 1M+ events/sec.
                        </Typography>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {['Go', 'gRPC', 'Kafka'].map(tag => (
                                <Chip key={tag} label={tag} size="small" sx={{ borderRadius: 1, height: 20, fontSize: '0.65rem', fontFamily: '"Fira Code", monospace', bgcolor: 'grey.100', color: 'text.secondary', border: '1px solid', borderColor: 'grey.200' }} />
                            ))}
                        </Stack>
                    </Box>
                </Paper>
            </Box>

             {/* Data Pipeline */}
             <Box sx={{ position: 'relative', pl: 5 }}>
                <Box sx={{ position: 'absolute', left: 15, top: 16, width: 10, height: 10, borderRadius: '50%', bgcolor: 'text.secondary', border: '4px solid white', zIndex: 1 }} />
                <Paper elevation={0} sx={{ borderRadius: 3, border: '1px solid', borderColor: 'divider', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
                    <Box sx={{ px: 2, py: 1.5, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'grey.50', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <Box>
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.2 }}>Data Pipeline</Typography>
                            <Typography variant="caption" sx={{ fontFamily: '"Fira Code", monospace', color: 'text.secondary' }}>Systems Eng</Typography>
                        </Box>
                        <Chip label="2019-2021" size="small" sx={{ borderRadius: 1, height: 20, fontSize: '0.65rem', fontFamily: '"Fira Code", monospace', bgcolor: 'white', border: '1px solid', borderColor: 'divider' }} />
                    </Box>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                            {['Python', 'Airflow', 'PostgreSQL'].map(tag => (
                                <Chip key={tag} label={tag} size="small" sx={{ borderRadius: 1, height: 20, fontSize: '0.65rem', fontFamily: '"Fira Code", monospace', bgcolor: 'grey.100', color: 'text.secondary', border: '1px solid', borderColor: 'grey.200' }} />
                            ))}
                        </Stack>
                    </Box>
                </Paper>
            </Box>
        </Box>
>>>>>>> main
    </Box>
  );
};

export default Projects;
