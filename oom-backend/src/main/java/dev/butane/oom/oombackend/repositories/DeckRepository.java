package dev.butane.oom.oombackend.repositories;

import dev.butane.oom.oombackend.models.Deck;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DeckRepository extends CrudRepository<Deck, Long> {}