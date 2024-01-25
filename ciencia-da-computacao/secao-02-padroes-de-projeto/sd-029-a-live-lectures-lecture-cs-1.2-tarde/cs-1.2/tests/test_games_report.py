import pytest

from src.games_report import get_all_consoles, load_games_from_json


def test_get_all_consoles():
    data = [
        {
            "Release": {
                "Console": "Nintendo DS",
            }
        },
        {
            "Release": {
                "Console": "Sony PSP",
            }
        },
        {"Release": {"Console": "Nintendo DS"}},
    ]

    consoles = get_all_consoles(data)

    assert consoles == {"Nintendo DS", "Sony PSP"}


def test_load_json_file_not_found():
    with pytest.raises(FileNotFoundError, match="Arquivo não encontrado"):
        load_games_from_json("data/naoexiste.json")
