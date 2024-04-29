import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { Fragment, useEffect, useState } from 'react';
import { BugProject } from '../../redux/selectors/bugSelectors';




export const BugsCount = () => {
  const [countOfTotalBug, setCountOfTotalBug] = useState(0);
  const [countOfTotalbugArchived, setCountOfTotalbugArchived] = useState(0);
  const [countTotalCriticalBug, setCountTotalCriticalBug] = useState(0);
  const totalBugInProject = BugProject();

  useEffect(() => {
    let archivedCount = 0;
    let criticalCount = 0;
    let totalCount = 0;

    totalBugInProject?.forEach(bug => {
      if (bug.is_archived) {
        archivedCount += 1;
      } else if (bug.priority === 'Critical' ) {
        criticalCount += 1;
        totalCount += 1;
      } else {
        totalCount += 1;
      }
    });

    setCountOfTotalBug(totalCount);
    setCountOfTotalbugArchived(archivedCount);
    setCountTotalCriticalBug(criticalCount);
  }, [totalBugInProject]);

  return (
    <Fragment>
      <Box display='flex' justifyContent="flex-end" paddingRight="3px" marginTop={'-300px'}  >
        <Paper elevation={4} sx={{marginBottom: '30px',  width: '305px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'primary.main', color: 'primary.contrastText' }}>
          <Box textAlign="center">
            <Typography variant="h4" component="h2">
              {countOfTotalBug}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Total(s) Bug
            </Typography>
            <Typography variant="h4" component="h2">
              {countTotalCriticalBug}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Critical(s) Bug
            </Typography>
            <Typography variant="h4" component="h2">
              {countOfTotalbugArchived}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Archived(s) Bug
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Fragment>
  );
}
