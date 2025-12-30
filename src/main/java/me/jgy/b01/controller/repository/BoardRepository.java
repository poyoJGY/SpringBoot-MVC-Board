package me.jgy.b01.controller.repository;

import me.jgy.b01.controller.domain.Board;
import me.jgy.b01.controller.repository.search.BoardSearch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public interface BoardRepository extends JpaRepository<Board, Long>, BoardSearch {

    @Query(value = "select now()", nativeQuery = true)
    String getTime();
}
