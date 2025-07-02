{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "ai-trader-view";

  buildInputs = with pkgs; [
    bun 
    nodejs
  ];
}
