import com.example.eventurejavabackend.EventureJavaBackendApplication;
import com.example.eventurejavabackend.dto.ParticipantDTO;
import com.example.eventurejavabackend.model.Event;
import com.example.eventurejavabackend.model.Participant;
import com.example.eventurejavabackend.model.User;
import com.example.eventurejavabackend.service.UserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest(classes = EventureJavaBackendApplication.class)
@AutoConfigureMockMvc
public class ParticipantControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void testAddParticipant() throws Exception {
        ParticipantDTO participantDTO = new ParticipantDTO();
        participantDTO.setUserId("user123");
        participantDTO.setRole("role");

        User user = new User();
        user.setId("user123");
        user.setEvents(new ArrayList<>());

        Event event = new Event();
        event.setEventId("event123");
        user.getEvents().add(event);

        Mockito.when(userService.getUserById("user123")).thenReturn(Optional.of(user));

        mockMvc.perform(post("/api/participants/add")
                        .header("userId", "user123")
                        .header("eventId", "event123")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(participantDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.userId").value("user123"));
    }

    @Test
    public void testUpdateParticipant() throws Exception {
        ParticipantDTO participantDTO = new ParticipantDTO();
        participantDTO.setUserId("user123");
        participantDTO.setRole("role");

        User user = new User();
        user.setId("user123");
        user.setEvents(new ArrayList<>());

        Event event = new Event();
        event.setEventId("event123");
        Participant participant = new Participant();
        participant.setParticipantId("participant123");
        event.getParticipants().add(participant);
        user.getEvents().add(event);

        Mockito.when(userService.getUserById("user123")).thenReturn(Optional.of(user));

        mockMvc.perform(put("/api/participants/update")
                        .header("userId", "user123")
                        .header("eventId", "event123")
                        .header("participantId", "participant123")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(participantDTO)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.userId").value("user123"));
    }
}