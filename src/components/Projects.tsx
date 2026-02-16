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

const Projects = () => {
  const theme = useTheme();

  return (
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
    </Box>
  );
};

export default Projects;
