import { Box, Divider, IconButton, Stack } from '@mui/material';
import FormikTextField from '../TextField';
import FormikCheckbox from '../Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';

const AdditionalGuestsLists = ({ values, arrayHelpers, editingDisabled }) => (
  <Stack spacing={1}>
    {values.additionalGuests.map((guest, index) => (
      <Box
        key={index}
        gap={2}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '100%',
          alignItems: 'center',
          padding: 1,
          border: '1px solid #ddd',
          borderRadius: 1,
          '& hr': {
            mx: 0.5,
          },
        }}
      >
 
        <FormikTextField
          name={`additionalGuests.${index}.name`}
          disabled={editingDisabled}
          sx={{ flex: 1, minWidth: '50%'}}
          flexItem
        />
        <Divider orientation='vertical' variant='middle' flexItem />
        <FormikCheckbox
          flexItem
          sx={{ flex: 2 }}
          name={`additionalGuests.${index}.isAttending`}
          label='Is Attending?'
        />
        {!editingDisabled ? (
          <>
            <Divider orientation='vertical' variant='middle' flexItem />
            <IconButton onClick={() => arrayHelpers.remove(index)}>
              <DeleteIcon />
            </IconButton>
          </>
        ) : null}
      </Box>
    ))}
  </Stack>
);

export default AdditionalGuestsLists;
