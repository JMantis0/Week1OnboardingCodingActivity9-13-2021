package base.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class Dec2OctService implements IDec2OctService {
    @Override
    public String convert2octal(String decString) {
        return Integer.toOctalString(Integer.parseInt(decString));
    }
}
