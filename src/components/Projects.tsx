import { Container, Grid, Card, CardContent, Typography, Chip, Stack } from '@mui/material';

interface Project {
  title: string;
  tags: string[];
  description?: string;
}

const projects: Project[] = [
  {
    title: 'cosmos',
    tags: ['Python', 'FastAPI', 'AWS Fargate', 'API Gateway'],
    description: 'A high-performance backend service orchestrating microservices.'
  },
  {
    title: 'Axon',
    tags: ['AWS Lambda', 'ECS'],
    description: 'Event-driven architecture for real-time data processing.'
  },
  {
    title: 'Data Engineering',
    tags: ['Oracle', 'Flink', 'ClickHouse'],
    description: 'Scalable data pipelines and real-time analytics infrastructure.'
  }
];

const Projects = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, borderBottom: '1px solid #333', pb: 1 }}>
        ./projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  {project.title}
                </Typography>
                {project.description && (
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                )}
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {project.tags.map((tag) => (
                    <Chip 
                        key={tag} 
                        label={tag} 
                        size="small" 
                        variant="outlined" 
                        sx={{ 
                            fontFamily: '"Fira Code", monospace',
                            borderRadius: '4px',
                            borderColor: 'rgba(255, 255, 255, 0.2)'
                        }} 
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
