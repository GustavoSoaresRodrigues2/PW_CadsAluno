<?php
        Class Aluno {
                public $nome;
                public $nota1;
                public $nota2;
                public $nota3;
                public $media;

                public function __construct($nomeAluno, $nota1_a, $nota2_a, $nota3_a) {
                        $this-> nome = $nomeAluno;
                        $this-> nota1 = $nota1_a;
                        $this-> nota2 = $nota2_a;
                        $this-> nota3 = $nota3_a;
                        $this-> media = number_format((($nota1_a + $nota2_a + $nota3_a)/3),2);
                        $floatValue = floatval("1.0");
                }
        }
?>